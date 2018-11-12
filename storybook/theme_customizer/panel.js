import React, { Component } from "react";
import {
    EVENT_GET_COMMON_PREFIX,
    EVENT_SET_COMMON_PREFIX,
    EVENT_GET_THEME_NAME,
    EVENT_SET_THEME_NAME,
    EVENT_SET_THEME_PANEL_VARIABLES,
} from "./constants";
import ThemeCustomizer from "./theme_customizer";
import DesignContextDecorator from "../design_context_decorator";

export default class Panel extends Component {
    constructor (props) {
        super(props);
        this.setPrefix = this.setPrefix.bind(this);
        this.setThemeName = this.setThemeName.bind(this);
        this.setVariables = this.setVariables.bind(this);
    }

    state = {
        variables: [],
    }

    componentDidMount () {
        this.props.channel.on(EVENT_SET_COMMON_PREFIX, this.setPrefix);
        this.props.channel.on(EVENT_SET_THEME_NAME, this.setThemeName);
        this.props.channel.on(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);

        this.props.channel.emit(EVENT_GET_COMMON_PREFIX);
        this.props.channel.emit(EVENT_GET_THEME_NAME);
    }

    componentWillUnmount () {
        this.channel.removeListener(EVENT_SET_COMMON_PREFIX, this.setPrefix);
        this.channel.removeListener(EVENT_SET_THEME_NAME, this.setThemeName);
        this.channel.removeListener(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);
        this.props.api.onStory(() => this.setState({ variables: [] }));
    }

    setPrefix (prefix) {
        this.setState({ prefix });
    }

    setThemeName (themeName) {
        this.setState({ themeName });
    }

    setVariables (variables) {
        this.setState({ variables });
    }

    render () {
        const { active } = this.props;
        if (!active) {
            return null;
        }

        const { prefix, themeName, variables } = this.state;

        return (
            <DesignContextDecorator>
                <ThemeCustomizer
                    prefix={prefix}
                    themeName={themeName}
                    variables={variables}
                />
            </DesignContextDecorator>
        );
    }
}
