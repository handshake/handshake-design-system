import { getStandardProps } from "../../util/props";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import StyledText from "./styles.web";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

class Text extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const { children } = this.props;
        const props = {
            ...mapProps(this.props),
            ...getStandardProps(this.props, ["children"]),
        };

        return (
            <WithTheme themes={themes}>
                {({ lookup }) => (
                    <StyledText
                        lookup={lookup}
                        {...props}
                    >
                        { children }
                    </StyledText>
                )}
            </WithTheme>
        );
    }
}

const H1 = props => <Text as="h1" block type="h1" {...props} />;
const H2 = props => <Text as="h2" block type="h2" {...props} />;
const H3 = props => <Text as="h3" block type="h3" {...props} />;
const H4 = props => <Text as="h4" block type="h4" {...props} />;
const H5 = props => <Text as="h5" block type="h5" {...props} />;
const P = props => <Text as="p" block type="body" {...props} />;
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
