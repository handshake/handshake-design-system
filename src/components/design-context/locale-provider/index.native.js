import _ from "lodash";
import AntDLocaleProvider from "antd-mobile/es/locale-provider";
import { IntlProvider } from "react-intl";
import React, { Component } from "react";
import Text from "antd-mobile-rn/lib/text";

import {
    ALL_SUPPORTED_LOCALES,
    DEFAULT_LANGUAGE,
    DEFAULT_LOCALE,
    getLocaleData,
    LocaleContext,
} from "./common.js";

import propTypes, { defaultProps } from "./prop_types";

export default class LocaleProvider extends Component {
    static ALL_SUPPORTED_LOCALES = ALL_SUPPORTED_LOCALES

    static DEFAULT_LOCALE = DEFAULT_LOCALE

    static propTypes = propTypes

    static defaultProps = defaultProps

    static getDerivedStateFromProps (nextProps) {
        return getLocaleData(nextProps.locale, nextProps.getAdditionalMessages);
    }

    state = {
        antdLocaleData: {},
        messages: {},
        language: DEFAULT_LANGUAGE,
        localeName: DEFAULT_LOCALE,
    }

    render () {
        const {
            antdLocaleData,
            language,
            localeName,
            messages,
        } = this.state;
        const { children } = this.props;
        console.log("LocaleContext.Provider", LocaleContext.Provider);
        console.log("AntDLocaleProvider", AntDLocaleProvider);
        console.log("IntlProvider", IntlProvider);
        return (
            <LocaleContext.Provider
                value={{
                    language,
                    locale: localeName,
                }}
            >
                <AntDLocaleProvider
                    locale={antdLocaleData}
                >
                    <IntlProvider
                        locale={language}
                        messages={messages}
                        textComponent={Text}
                    >
                        {children}
                    </IntlProvider>
                </AntDLocaleProvider>
            </LocaleContext.Provider>
        );
    }
}

export const LocaleSubscriber = LocaleContext.Subscriber;
