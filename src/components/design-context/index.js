import React from "react";
import LocaleProvider, { LocaleSubscriber } from "./locale-provider";
import ThemeProvider, { ThemeContext, ThemeSubscriber } from "./theme-provider";
import WithTheme from "./theme-provider/with_theme";

const DesignContext = ({
    children,
    getAdditionalMessages,
    locale,
    theme,
    variables,
}) => (
    <LocaleProvider
        getAdditionalMessages={getAdditionalMessages}
        locale={locale}
    >
        <ThemeProvider
            theme={theme}
            variables={variables}
        >
            {children}
        </ThemeProvider>
    </LocaleProvider>
);

DesignContext.propTypes = {
    ...LocaleProvider.propTypes,
    ...ThemeProvider.propTypes,
};

DesignContext.LocaleProvider = LocaleProvider;
DesignContext.LocaleSubscriber = LocaleSubscriber;
DesignContext.ThemeContext = ThemeContext;
DesignContext.ThemeProvider = ThemeProvider;
DesignContext.ThemeSubscriber = ThemeSubscriber;
DesignContext.WithTheme = WithTheme;

export default DesignContext;
export {
    LocaleProvider,
    LocaleSubscriber,
    ThemeContext,
    ThemeProvider,
    ThemeSubscriber,
    WithTheme
}
