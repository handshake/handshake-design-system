import addons from "@storybook/addons";
import { setIntlConfig } from "storybook-addon-intl";
import { EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from "storybook-addon-intl/src/shared";
import React, { Component } from "react";
import DesignContext from "../src/components/design-context";

// Custom replacement for `storybook-addon-intl`'s `withIntl` decorator
// so we can use our own `LocaleProvider` which combines both `react-intl`'s
// `IntlProvider` and AntD's `LocaleProvider`
export default class IntlDecorator extends Component {
    static ALL_SUPPORTED_LOCALES = DesignContext.LocaleProvider.ALL_SUPPORTED_LOCALES
    static DEFAULT_LOCALE = DesignContext.LocaleProvider.DEFAULT_LOCALE

    constructor (props) {
        super(props);
        this.channel = addons.getChannel();
        this.setLocale = this.setLocale.bind(this);
        this.channel.on(EVENT_SET_LOCALE_ID, this.setLocale);
        this.channel.emit(EVENT_GET_LOCALE_ID);

        setIntlConfig({
            locales: DesignContext.LocaleProvider.ALL_SUPPORTED_LOCALES,
            defaultLocale: DesignContext.LocaleProvider.DEFAULT_LOCALE,
        });
    }

    state = {
        locale: "en-US",
    }

    componentWillUnmount () {
        this.channel.removeListener(EVENT_SET_LOCALE_ID, this.setLocale);
    }

    setLocale (locale) {
        this.setState({ locale });
    }

    render () {
        return (
            <DesignContext locale={this.state.locale || DesignContext.LocaleProvider.DEFAULT_LOCALE}>
                {this.props.children}
            </DesignContext>
        );
    }
}
