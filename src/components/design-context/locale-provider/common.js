import _ from "lodash";
import { addLocaleData } from "react-intl";
import carmen from "@kmdavis/carmen";
import flatten from "flat";
import React from "react";

// These imports depend on using `babel-plugin-wildcard`
// with the following options: `{ "noModifyCase": true, "exts": ["js", "json", "svg"] }`
// see our .babelrc for an example usage
import * as ALL_ANTD_WEB_LOCALES from "../../../../node_modules/antd/es/locale-provider";
import * as ALL_ANTD_MOBILE_LOCALES from "../../../../node_modules/antd-mobile/es/locale-provider";
// NOTE: there is also data for React-Native at "../../../../node_modules/antd-mobile-rn/es/locale-provider"
// but it is just a subset of the mobile locale data, and it has some syntax errors (wat?) in one
// of the locales (sv_SE) so, I'm going to ignore it.

// TODO: maybe replace below wildcard import with "react-intl/locale-data/index.js" which is a pre-compiled aggregate;
// antd doesn't have any equivalent, so we would still need the wildcard babel plugin
import * as ALL_REACT_INTL_LOCALES from "../../../../node_modules/react-intl/locale-data";
import * as ALL_HS_LOCALES from "../../../locales";

delete ALL_ANTD_WEB_LOCALES.default;
delete ALL_ANTD_WEB_LOCALES.index;
delete ALL_ANTD_WEB_LOCALES.LocaleReceiver;
delete ALL_ANTD_MOBILE_LOCALES.index;
delete ALL_ANTD_MOBILE_LOCALES["locale-provider"];
delete ALL_REACT_INTL_LOCALES.index;

const cache = {};

const DEFAULT_LANGUAGE = "en";
const DEFAULT_REGION = "US";
const DEFAULT_LOCALE = `${DEFAULT_LANGUAGE}-${DEFAULT_REGION}`;
const DEFAULT_ANTD_LOCALE = `${DEFAULT_LANGUAGE}_${DEFAULT_REGION}`;

const DEFAULT_ANTD_LOCALES_GROUPED_BY_LANG =
    _.merge(
        _.mapValues(
            _.groupBy(_.keys(ALL_ANTD_WEB_LOCALES), code => code.slice(0, 2)),
            (codes, key) => {
                if (codes.length === 1) {
                    return codes[0];
                }
                const defCode = `${key}_${key.toUpperCase()}`;
                if (codes.includes(defCode)) {
                    return defCode;
                }
                return null; // will be added below
            },
        ),
        {
            // e.g. ant has both `en_US` and `en_GB`, but which one wins? Sorry Limeys.
            en: "en_US",
            // same, but for mainland China (`zh_CN`) vs Taiwan (`zh_TW`)
            zh: "zh_CN",
        },
    );
const ALL_SUPPORTED_LOCALES = _.uniq(_.keys(ALL_HS_LOCALES).map(locale => {
    if (locale.split("-").length === 2) {
        return locale;
    }
    return DEFAULT_ANTD_LOCALES_GROUPED_BY_LANG[locale].split("_").join("-");
})).sort();

function getLocaleData (locale, getAdditionalMessages) {
    const parsed = carmen.parse(locale);
    const language = parsed.language || DEFAULT_LANGUAGE;
    const region = parsed.region || DEFAULT_REGION;
    const localeName = `${language}-${region}`;

    if (!cache[locale]) {
        const antdLocaleName = `${language}_${region}`;

        let antdLocaleData = _.merge(
            {},
            // AntD web + mobile/rn locale data can be merged cleanly because they have ZERO overlaps.
            // That lack of overlap is an issue of it's own, but it does mean we don't have to worry
            // about any collisions.
            ALL_ANTD_WEB_LOCALES[antdLocaleName] || ALL_ANTD_WEB_LOCALES[DEFAULT_ANTD_LOCALE],
            ALL_ANTD_MOBILE_LOCALES[antdLocaleName] || ALL_ANTD_MOBILE_LOCALES[DEFAULT_ANTD_LOCALE],
        );

        if (language !== "en") {
            // `en` is the default react-intl locale, so, we don't need to load it.
            addLocaleData([...(ALL_REACT_INTL_LOCALES[language] || ALL_REACT_INTL_LOCALES[DEFAULT_LANGUAGE])]);
        }

        const messages = flatten(
            ALL_HS_LOCALES[localeName] || // look for `es-ES` first
            ALL_HS_LOCALES[language] || // then `es`
            ALL_HS_LOCALES[DEFAULT_LANGUAGE] // and finally default to `en`
        );

        cache[locale] = {
            antdLocaleData,
            messages,
            language,
            locale: localeName,
        };
    }

    const result = _.cloneDeep(cache[locale]);

    if (getAdditionalMessages) {
        _.extend(result.messages, flatten(getAdditionalMessages({ language, locale: localeName })));
    }

    return result
}

const LocaleContext = React.createContext({
    language: DEFAULT_LANGUAGE,
    locale: DEFAULT_LOCALE,
});

export {
    ALL_SUPPORTED_LOCALES,
    DEFAULT_LANGUAGE,
    DEFAULT_LOCALE,
    getLocaleData,
    LocaleContext,
}
