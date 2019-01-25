import propTypes, { defaultProps } from "./prop_types";
import React, { Component } from "react";
import StyledText from "./styles.native";
import themes from "./themes.json";
import { View } from "react-native";
import WithTheme from "../design-context/theme-provider/with_theme";

class Text extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const { block, children } = this.props;
        return (
            <WithTheme themes={themes}>
                {({ lookup }) => (
                    block ? (
                        <View>
                            <StyledText
                                lookup={lookup}
                                {...this.props}
                            >
                                { children }
                            </StyledText>
                        </View>
                    ) : (
                        <StyledText
                            lookup={lookup}
                            {...this.props}
                        >
                            { children }
                        </StyledText>
                    )
                )}
            </WithTheme>
        );
    }
}

const H1 = props => <Text type="h1" block {...props} />;
const H2 = props => <Text type="h2" block {...props} />;
const H3 = props => <Text type="h3" block {...props} />;
const H4 = props => <Text type="h4" block {...props} />;
const H5 = props => <Text type="h5" block {...props} />;
const P = props => <Text type="body" block {...props} />;
const Span = props => <Text type="body" {...props} />;

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.P = P;
Text.Span = Span;

export default Text;
export {
    H1, H2, H3, H4, H5, P, Span,
};
