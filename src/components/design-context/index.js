import React from "react";
import LocaleProvider from "./locale-provider";
import ThemeProvider, { ThemeSubscriber } from "./theme-provider";

const DesignContext = ({ children, getAdditionalMessages, locale, theme }) => (
    <ThemeProvider
        theme={theme}
    >
        <LocaleProvider
            getAdditionalMessages={getAdditionalMessages}
            locale={locale}
        >
            {children}
        </LocaleProvider>
    </ThemeProvider>
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
