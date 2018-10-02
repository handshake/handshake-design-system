import React, { Component } from "react";
import { EVENT_SET_THEME_PANEL_VARIABLES } from "./constants";
import ThemeCustomizer from "./theme_customizer";
// import ThemeProvider from "../../src/components/design-context/theme-provider";
import DesignContextDecorator from "../design_context_decorator";

export default class Panel extends Component {
    constructor (props) {
        super(props);
        this.setVariables = this.setVariables.bind(this);
        this.props.channel.on(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);
    }

    state = {
        variables: [],
    }

    componentWillUnmount () {
        this.channel.removeListener(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);
        this.props.api.onStory(() => this.setState({ variables: [] }));
    }

    setVariables (variables) {
        this.setState({ variables });
    }

    render () {
        if (!this.props.active) {
            return null;
        }

        return (
            <DesignContextDecorator>
                <ThemeCustomizer variables={this.state.variables} />
            </DesignContextDecorator>
        );
    }
}
