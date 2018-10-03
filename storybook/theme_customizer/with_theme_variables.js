import addons, { makeDecorator } from "@storybook/addons";
import { Component } from "react";
import { EVENT_SET_THEME_PANEL_VARIABLES } from "./constants";

const withThemeVariables = makeDecorator({
    name: "withThemeVariables",
    parameterName: "themeVariables",
    skipIfNoParametersOrOptions: false,
    allowDeprecatedUsage: true,
    wrapper: (getStory, context, { options: variables }) => {
        const channel = addons.getChannel();
        channel.emit(EVENT_SET_THEME_PANEL_VARIABLES, variables && variables.sort());
        return getStory(context);
      },
});

export default withThemeVariables;
export class WithThemeVariables extends Component {
    render() {
        const { children, variables } = this.props;
        const channel = addons.getChannel();
    
        channel.emit(EVENT_SET_THEME_PANEL_VARIABLES, variables && variables.sort());
        return children;
    }
}