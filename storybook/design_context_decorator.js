import _ from "lodash";
import addons from "@storybook/addons";
import { setIntlConfig } from "storybook-addon-intl";
import { EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from "storybook-addon-intl/src/shared";
import React, { Component } from "react";
import DesignContext from "../src/components/design-context";

import {
    EVENT_SET_COMMON_PREFIX,
    EVENT_GET_THEME_NAME,
    EVENT_SET_THEME_NAME,
    EVENT_GET_THEME_VARIABLES,
    EVENT_SET_THEME_VARIABLES,
} from "./theme_customizer/constants";

// Custom replacement for `storybook-addon-intl`'s `withIntl` decorator
// so we can use our own `LocaleProvider` which combines both `react-intl`'s
// `IntlProvider` and AntD's `LocaleProvider`
export default class DesignContextDecorator extends Component {
    static ALL_SUPPORTED_LOCALES = DesignContext.LocaleProvider.ALL_SUPPORTED_LOCALES
    static DEFAULT_LOCALE = DesignContext.LocaleProvider.DEFAULT_LOCALE

    constructor (props) {
        super(props);
        this.channel = addons.getChannel();
        this.setLocale = this.setLocale.bind(this);
        this.setThemeName = this.setThemeName.bind(this);
        this.setThemeVariables = this.setThemeVariables.bind(this);

        setIntlConfig({
            locales: DesignContext.LocaleProvider.ALL_SUPPORTED_LOCALES,
            defaultLocale: DesignContext.LocaleProvider.DEFAULT_LOCALE,
        });
    }

    state = {
        locale: "en-US",
        theme: "light",
        variables: {},
    }

    componentDidMount () {
        this.channel.on(EVENT_SET_LOCALE_ID, this.setLocale);
        this.channel.on(EVENT_SET_THEME_NAME, this.setThemeName);
        this.channel.on(EVENT_SET_THEME_VARIABLES, this.setThemeVariables);

        this.channel.emit(EVENT_GET_LOCALE_ID);
        this.channel.emit(EVENT_GET_THEME_NAME);
        this.channel.emit(EVENT_GET_THEME_VARIABLES);

        this.channel.emit(EVENT_SET_COMMON_PREFIX, "hs");
    }

    componentWillUnmount () {
        this.channel.removeListener(EVENT_SET_LOCALE_ID, this.setLocale);
        this.channel.removeListener(EVENT_SET_THEME_NAME, this.setThemeName);
        this.channel.removeListener(EVENT_SET_THEME_VARIABLES, this.setThemeVariables);
    }

    setLocale (locale) {
        this.setState({ locale });
    }

    setThemeName (theme) {
        this.setState({ theme });
    }

    setThemeVariables (variables) {
        this.setState({ variables: _.clone(variables) });
    }

    render () {
        return (
            <DesignContext
                locale={this.state.locale || DesignContext.LocaleProvider.DEFAULT_LOCALE}
                theme={this.state.theme}
                variables={this.state.variables}
            >
                {this.props.children}
            </DesignContext>
        );
    }
}
