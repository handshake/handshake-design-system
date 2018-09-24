import _ from "lodash";
import { IntlProvider } from "react-intl";
import AntDLocaleProvider from "antd-mobile/es/locale-provider";
import PropTypes from "prop-types";
import React, { Component } from "react";

import {
    ALL_SUPPORTED_LOCALES,
    DEFAULT_LANGUAGE,
    DEFAULT_LOCALE,
    getLocaleData,
} from "./common.js";

import PROP_TYPES, { DEFAULT_PROPS } from "./prop_types";

export default class LocaleProvider extends Component {
    static ALL_SUPPORTED_LOCALES = ALL_SUPPORTED_LOCALES
    static DEFAULT_LOCALE = DEFAULT_LOCALE

    static propTypes = PROP_TYPES
    static defaultProps = DEFAULT_PROPS

    static getDerivedStateFromProps (nextProps) {
        return getLocaleData(nextProps.locale, nextProps.getAdditionalMessages);
    }

    state = {
        antdLocaleData: {},
        messages: {},
        intlLocale: DEFAULT_LANGUAGE,
    }

    render () {
        return (
            <AntDLocaleProvider
                locale={this.state.antdLocaleData}
            >
                <IntlProvider
                    locale={this.state.intlLocale}
                    messages={this.state.messages}
                >
                    { this.props.children }
                </IntlProvider>
            </AntDLocaleProvider>
        );
    }
}