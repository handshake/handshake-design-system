import _ from "lodash";
import Button from "antd-mobile-rn/es/button";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";
import Icon from "../icon/index.native";
import propTypes, { defaultProps, mapPropsForMobile, themes } from "./prop_types";
import WithTheme from "../design-context/theme-provider/with_theme";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "borderColorBase",
    "buttonFontSize",
    "buttonFontSizeSm",
    "buttonHeight",
    "buttonHeightSm",
    "colorTextBase",
    "colorTextBaseInverse",
    "fillBase",
    "fillDisabled",
    "fillTap",
    "ghostButtonColor",
    "ghostButtonFillTap",
    "hSpacingLg",
    "hSpacingMd",
    "hSpacingSm",
    "primaryButtonFill",
    "primaryButtonFillTap",
    "radiusMd",
    "warningButtonFill",
    "warningButtonFillTap",
];

// original: antd-mobile-rn/es/button/style/index.native.js
// maintenance task: check ^^ for changes anytime we update antd-mobile-rn
function styles (lookup, variables) {
    return {
        container: {
            flexDirection: "row",
        },
        defaultHighlight: {
            backgroundColor: variables.fillTap,
            borderColor: variables.borderColorBase,
        },
        primaryHighlight: {
            backgroundColor: lookup("primary.active.backgroundColor"),
            borderColor: lookup("primary.active.borderColor"),
        },
        ghostHighlight: {
            backgroundColor: "transparent",
            borderColor: variables.ghostButtonFillTap,
        },
        warningHighlight: {
            backgroundColor: variables.warningButtonFillTap,
            borderColor: variables.warningButtonFill,
        },
        wrapperStyle: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: variables.radiusMd,
            borderWidth: 1,
        },
        largeRaw: {
            height: variables.buttonHeight,
            paddingLeft: variables.hSpacingLg,
            paddingRight: variables.hSpacingLg,
        },
        defaultSizeRaw: {
            height: 40,
            paddingLeft: variables.hSpacingMd,
            paddingRight: variables.hSpacingMd,
        },
        smallRaw: {
            height: variables.buttonHeightSm,
            paddingLeft: variables.hSpacingSm,
            paddingRight: variables.hSpacingSm,
        },
        defaultRaw: {
            backgroundColor: variables.fillBase,
            borderColor: variables.borderColorBase,
        },
        primaryRaw: {
            backgroundColor: lookup("primary.default.backgroundColor"),
            borderColor: lookup("primary.default.borderColor"),
        },
        ghostRaw: {
            backgroundColor: "transparent",
            borderColor: variables.ghostButtonColor,
        },
        warningRaw: {
            backgroundColor: variables.warningButtonFill,
            borderColor: variables.warningButtonFill,
        },
        defaultDisabledRaw: {
            backgroundColor: variables.fillDisabled,
            borderColor: variables.fillDisabled,
        },
        primaryDisabledRaw: {
            backgroundColor: lookup("primary.disabled.backgroundColor"),
            borderColor: lookup("primary.disabled.borderColor"),
        },
        ghostDisabledRaw: {
            borderColor: `${variables.colorTextBase}1A`,
        },
        warningDisabledRaw: {
            opacity: 0.4,
        },
        defaultHighlightText: {
            color: variables.colorTextBase,
        },
        primaryHighlightText: {
            color: lookup("primary.active.color"),
        },
        ghostHighlightText: {
            color: variables.ghostButtonFillTap,
        },
        warningHighlightText: {
            color: `${variables.colorTextBaseInverse}4D`,
        },
        largeRawText: {
            fontSize: variables.buttonFontSize,
        },
        defaultSizeRawText: {
            fontSize: 15,
        },
        smallRawText: {
            fontSize: variables.buttonFontSizeSm,
        },
        defaultRawText: {
            color: variables.colorTextBase,
        },
        primaryRawText: {
            color: lookup("primary.default.color"),
        },
        ghostRawText: {
            color: variables.ghostButtonColor,
        },
        warningRawText: {
            color: variables.colorTextBaseInverse,
        },
        defaultDisabledRawText: {
            color: `${variables.colorTextBase}4D`,
        },
        primaryDisabledRawText: {
            color: lookup("primary.disabled.color")
        },
        ghostDisabledRawText: {
            color: `${variables.colorTextBase}1A`,
        },
        warningDisabledRawText: {
            color: `${variables.colorTextBaseInverse}99`,
        },
        indicator: {
            marginRight: variables.hSpacingMd,
        },
    };
}

class ButtonWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = {
        block: true,
        ...defaultProps
    };
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const content = (
            <WithTheme themes={themes}>
                {({ lookup, variables }) => (
                    <Button
                        styles={styles(lookup, variables)}
                        {...mapPropsForMobile(this.props)}
                    >
                        {(this.props.icon && !this.props.loading) ?
                            [
                                <Icon
                                    key="icon"
                                    color={(() => {
                                        switch (this.props.type) {
                                        case "primary":
                                        case "warning":
                                            return this.props.disabled ?
                                                `${theme.colorTextBaseInverse}99` :
                                                theme.colorTextBaseInverse;
                                        case "ghost":
                                            return this.props.disabled ?
                                                `${theme.colorTextBase}1A` :
                                                theme.ghostButtonColor;
                                        case "default":
                                        default:
                                            return this.props.disabled ?
                                                `${theme.colorTextBase}4D` :
                                                theme.colorTextBase;
                                        }
                                    })()}
                                    size={this.props.size === "large" ? 16 : "small"}
                                    type={this.props.icon}
                                />,
                                <Text key="gap">&nbsp;&nbsp;</Text>,
                                this.props.children,
                            ]
                        :
                            this.props.children
                        }
                    </Button>
                )}
            </WithTheme>
        );
        return this.props.block ? content : <Text>{content}</Text>;
    }
}

export default ButtonWrapper;
