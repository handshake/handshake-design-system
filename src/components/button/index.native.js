import _ from "lodash";
import Button from "antd-mobile-rn/es/button";
import Icon from "antd-mobile-rn/es/icon";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import { ThemeSubscriber } from "../design-context/theme-provider";

// original: antd-mobile-rn/es/button/style/index.native.js
// maintenance task: check ^^ for changes anytime we update antd-mobile-rn
function styles (theme) {
    return {
        container: {
            flexDirection: "row",
        },
        defaultHighlight: {
            backgroundColor: theme.fillTap,
            borderColor: theme.borderColorBase,
        },
        primaryHighlight: {
            backgroundColor: theme.primaryButtonFillTap,
            borderColor: theme.primaryButtonFill,
        },
        ghostHighlight: {
            backgroundColor: "transparent",
            borderColor: theme.ghostButtonFillTap,
        },
        warningHighlight: {
            backgroundColor: theme.warningButtonFillTap,
            borderColor: theme.warningButtonFill,
        },
        wrapperStyle: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: theme.radiusMd,
            borderWidth: 1,
        },
        largeRaw: {
            height: theme.buttonHeight,
            paddingLeft: theme.hSpacingLg,
            paddingRight: theme.hSpacingLg,
        },
        smallRaw: {
            height: theme.buttonHeightSm,
            paddingLeft: theme.hSpacingSm,
            paddingRight: theme.hSpacingSm,
        },
        defaultRaw: {
            backgroundColor: theme.fillBase,
            borderColor: theme.borderColorBase,
        },
        primaryRaw: {
            backgroundColor: theme.primaryButtonFill,
            borderColor: theme.primaryButtonFill,
        },
        ghostRaw: {
            backgroundColor: "transparent",
            borderColor: theme.ghostButtonColor,
        },
        warningRaw: {
            backgroundColor: theme.warningButtonFill,
            borderColor: theme.warningButtonFill,
        },
        defaultDisabledRaw: {
            backgroundColor: theme.fillDisabled,
            borderColor: theme.fillDisabled,
        },
        primaryDisabledRaw: {
            opacity: 0.4,
        },
        ghostDisabledRaw: {
            borderColor: `${theme.colorTextBase}1A`,
        },
        warningDisabledRaw: {
            opacity: 0.4,
        },
        defaultHighlightText: {
            color: theme.colorTextBase,
        },
        primaryHighlightText: {
            color: `${theme.colorTextBaseInverse}4D`,
        },
        ghostHighlightText: {
            color: theme.ghostButtonFillTap,
        },
        warningHighlightText: {
            color: `${theme.colorTextBaseInverse}4D`,
        },
        largeRawText: {
            fontSize: theme.buttonFontSize,
        },
        smallRawText: {
            fontSize: theme.buttonFontSizeSm,
        },
        defaultRawText: {
            color: theme.colorTextBase,
        },
        primaryRawText: {
            color: theme.colorTextBaseInverse,
        },
        ghostRawText: {
            color: theme.ghostButtonColor,
        },
        warningRawText: {
            color: theme.colorTextBaseInverse,
        },
        defaultDisabledRawText: {
            color: `${theme.colorTextBase}4D`,
        },
        primaryDisabledRawText: {
            color: `${theme.colorTextBaseInverse}99`,
        },
        ghostDisabledRawText: {
            color: `${theme.colorTextBase}1A`,
        },
        warningDisabledRawText: {
            color: `${theme.colorTextBaseInverse}99`,
        },
        indicator: {
            marginRight: theme.hSpacingMd,
        },
    };
}

class ButtonWrapper extends Component {
    render () {
        const content = (
            <ThemeSubscriber>
                {theme => (
                    <Button
                        styles={styles(theme)}
                        {...mapPropsForMobile(this.props)}
                    >
                        {(this.props.icon && !this.props.loading) ?
                            [
                                <Icon
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
                                    size={this.props.size === "large" ? "sm" : "xxs"}
                                    type={this.props.icon}
                                />,
                                this.props.children,
                            ]
                        :
                            this.props.children
                        }
                    </Button>
                )}
            </ThemeSubscriber>
        );
        return this.props.block ? content : <Text>{content}</Text>;
    }
}

ButtonWrapper.propTypes = propTypes;
ButtonWrapper.defaultProps = {
    block: true,
    ...defaultProps
};

export default ButtonWrapper;