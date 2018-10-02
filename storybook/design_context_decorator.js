import _ from "lodash";
import addons from "@storybook/addons";
import { setIntlConfig } from "storybook-addon-intl";
import { EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from "storybook-addon-intl/src/shared";
import React, { Component } from "react";
import DesignContext from "../src/components/design-context";

import { EVENT_GET_THEME, EVENT_SET_THEME } from "./theme_customizer/constants";

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
        this.setTheme = this.setTheme.bind(this);

        setIntlConfig({
            locales: DesignContext.LocaleProvider.ALL_SUPPORTED_LOCALES,
            defaultLocale: DesignContext.LocaleProvider.DEFAULT_LOCALE,
        });
    }

    state = {
        locale: "en-US",
        theme: {}
    }

    componentDidMount () {
        this.channel.on(EVENT_SET_LOCALE_ID, this.setLocale);
        this.channel.on(EVENT_SET_THEME, this.setTheme);

        this.channel.emit(EVENT_GET_LOCALE_ID);
        this.channel.emit(EVENT_GET_THEME);
    }

    componentWillUnmount () {
        this.channel.removeListener(EVENT_SET_LOCALE_ID, this.setLocale);
        this.channel.removeListener(EVENT_SET_THEME, this.setTheme);
    }

    setLocale (locale) {
        this.setState({ locale });
    }

    setTheme (theme) {
        this.setState({ theme: _.clone(theme) });
    }

    render () {
        return (
            <DesignContext
                locale={this.state.locale || DesignContext.LocaleProvider.DEFAULT_LOCALE}
                theme={this.state.theme}
            >
                {this.props.children}
            </DesignContext>
        );
    }
}
