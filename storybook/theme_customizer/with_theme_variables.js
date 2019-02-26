import addons, { makeDecorator } from "@storybook/addons";
import { Component } from "react";
import { EVENT_SET_THEME_PANEL_VARIABLES } from "./constants";
import { getThemeVariables } from "../../src/components/design-context/theme-provider/with_theme";
import PropTypes from "prop-types";

const withThemeVariables = makeDecorator({
    name: "withThemeVariables",
    parameterName: "themeVariables",
    skipIfNoParametersOrOptions: false,
    allowDeprecatedUsage: true,
    wrapper: (getStory, context, { options: themes }) => {
        const channel = addons.getChannel();
        const variables = getThemeVariables(themes); // TODO: themeName
        channel.emit(EVENT_SET_THEME_PANEL_VARIABLES, variables && variables.sort());
        return getStory(context);
      },
});

export default withThemeVariables;
export class WithThemeVariables extends Component {
    static propTypes = {
        children: PropTypes.node,
        themes: PropTypes.object,
    }

    render () {
        const { children, themes } = this.props;
        const channel = addons.getChannel();
        const variables = getThemeVariables(themes); // TODO: themeName
        channel.emit(EVENT_SET_THEME_PANEL_VARIABLES, variables && variables.sort());
        return children;
    }
}
