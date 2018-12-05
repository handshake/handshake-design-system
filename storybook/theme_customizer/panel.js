import DesignContextDecorator from "../design_context_decorator";
import {
    EVENT_GET_COMMON_PREFIX,
    EVENT_GET_THEME_NAME,
    EVENT_SET_COMMON_PREFIX,
    EVENT_SET_THEME_NAME,
    EVENT_SET_THEME_PANEL_VARIABLES,
} from "./constants";
import PropTypes from "prop-types";
import React, { Component } from "react";
import ThemeCustomizer from "./theme_customizer";

export default class Panel extends Component {
    static propTypes = {
        active: PropTypes.bool,
        api: PropTypes.object,
        channel: PropTypes.object,
    }

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
        const { channel } = this.props;

        channel.on(EVENT_SET_COMMON_PREFIX, this.setPrefix);
        channel.on(EVENT_SET_THEME_NAME, this.setThemeName);
        channel.on(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);

        channel.emit(EVENT_GET_COMMON_PREFIX);
        channel.emit(EVENT_GET_THEME_NAME);
    }

    componentWillUnmount () {
        const { api, channel } = this.props;

        channel.removeListener(EVENT_SET_COMMON_PREFIX, this.setPrefix);
        channel.removeListener(EVENT_SET_THEME_NAME, this.setThemeName);
        channel.removeListener(EVENT_SET_THEME_PANEL_VARIABLES, this.setVariables);
        api.onStory(() => this.setState({ variables: [] }));
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
