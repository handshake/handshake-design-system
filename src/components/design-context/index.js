import React from "react";
import LocaleProvider from "./locale-provider";
import ThemeProvider, { ThemeSubscriber } from "./theme-provider";

const DesignContext = ({ children, getAdditionalMessages, locale, theme }) => (
    <LocaleProvider
        getAdditionalMessages={getAdditionalMessages}
        locale={locale}
    >
        <ThemeProvider
            theme={theme}
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
DesignContext.ThemeProvider = ThemeProvider;
DesignContext.ThemeSubscriber = ThemeSubscriber;

export default DesignContext;
export {
    LocaleProvider,
    ThemeProvider,
    ThemeSubscriber
}
