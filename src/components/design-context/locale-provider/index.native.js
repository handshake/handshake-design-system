import _ from "lodash";
import { IntlProvider } from "react-intl";
import AntDLocaleProvider from "antd-mobile/es/locale-provider";
import React, { Component } from "react";

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
        console.log("LocaleContext.Provider", LocaleContext.Provider);
        console.log("AntDLocaleProvider", AntDLocaleProvider);
        console.log("IntlProvider", IntlProvider);
        return (
            <LocaleContext.Provider value={{
                language: this.state.language,
                locale: this.state.localeName,
            }}>
                <AntDLocaleProvider
                    locale={this.state.antdLocaleData}
                >
                    <IntlProvider
                        locale={this.state.language}
                        messages={this.state.messages}
                    >
                        { this.props.children }
                    </IntlProvider>
                </AntDLocaleProvider>
            </LocaleContext.Provider>
        );
    }
}

export const LocaleSubscriber = LocaleContext.Subscriber;
