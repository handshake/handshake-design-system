import _ from "lodash";
import Button from "antd-mobile-rn/es/button";
import { FormattedMessage } from "react-intl";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";
import Icon from "../icon/index.native";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

// original: antd-mobile-rn/es/button/style/index.native.js
// maintenance task: check ^^ for changes anytime we update antd-mobile-rn
function styles (lookup, { loading, size, type }) {
    return {
        [`${type}Raw`]: {
            backgroundColor: lookup(`${type}.${loading ? "loading" : "default"}.backgroundColor`),
            borderColor: lookup(`${type}.${loading ? "loading" : "default"}.borderColor`),
        },
        [`${type}Highlight`]: {
            backgroundColor: lookup(`${type}.active.backgroundColor`),
            borderColor: lookup(`${type}.active.borderColor`),
        },
        [`${type}DisabledRaw`]: {
            backgroundColor: lookup(`${type}.disabled.backgroundColor`),
            borderColor: lookup(`${type}.disabled.borderColor`),
        },
        [`${type}RawText`]: {
            color: lookup(`${type}.default.color`),
            fontFamily: lookup(`${type}.default.fontFamily`), // TODO: might need different values for each environment
            textTransform: lookup(`${type}.default.textTransform`),
        },
        [`${type}HighlightText`]: {
            color: lookup(`${type}.active.color`),
        },
        [`${type}DisabledRawText`]: {
            color: lookup(`${type}.${loading ? "loading" : "disabled"}.color`)
        },

        [`${size}Raw`]: {
            height: lookup(`${size}.height`),
            paddingLeft: lookup(`${size}.margin.horizontal`),
            paddingRight: lookup(`${size}.margin.horizontal`),
        },
        [`${size}RawText`]: {
            fontSize: lookup(`${size}.fontSize`),
            fontWeight: lookup(`${size}.weight`),
        },

        container: {
            flexDirection: "row",
        },
        wrapperStyle: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: lookup(`${size}.borderRadius`),
            borderWidth: lookup(`${type}.default.borderWidth`),
        },
        indicator: {
            marginRight: "8px",
        },
    };
}

// TODO: `link` type && icons don't use `active` color

class ButtonWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = {
        block: true,
        ...defaultProps
    };

    render () {
        const {
            block,
            children,
            disabled,
            icon,
            loading,
            size,
            type,
        } = this.props;
        const kids = loading
            ? <FormattedMessage key="text" id={"ds.button.loading"} />
            : children;
        const content = (
            <WithTheme themes={themes}>
                {({ lookup }) => (
                    <Button
                        styles={styles(lookup, this.props)}
                        {...mapPropsForMobile(this.props)}
                    >
                        {(icon && !loading) ?
                            [
                                <Icon
                                    key="icon"
                                    color={lookup(
                                        `${type}.${disabled ? "disabled" : "default"}.color`
                                    )}
                                    size={lookup(`${size}.fontSize`)}
                                    type={icon}
                                />,
                                <Text key="gap">&nbsp;&nbsp;</Text>,
                                kids,
                            ]
                        :
                            (kids)
                        }
                    </Button>
                )}
            </WithTheme>
        );
        return block ? content : <Text>{content}</Text>;
    }
}

export default ButtonWrapper;
