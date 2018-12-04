# Technical Overview
## how to wrap an antd/antd-mobile-rn component in design system

1. Create a new component in design system; this is comprised of 8 files:
    - index.native.js
    - index.web.js
    - prop_types.js
    - sketch_stories.js
    - stories.js
    - styles.native.js
    - styles.web.js
    - themes.json

    The quickest way to create this is to make a copy of the `src/components/__template__` folder and rename all instances of `__TEMPLATE__` in the copy.
2. Identify and create variables:
    Look at the the variables and values used by Antd (in `node_modules/antd-mobile-rn/es/__TEMPLATE__/style/index.native.js` and `node_modules/antd/es/__TEMPLATE__/style/index.less`) as well as the existing handshake variables (in `src/theme/handshake_less_variables.json`) and add any variables that don't exist yet. Follow the existing pattern as much as possible.
3. Create a theme:
    Open up your `themes.json` file. This file is a mapping from `purpose` to `variable`. The top level of the file represents different themes; currently, we only have a `light` theme. The leaf nodes represent individual css properties. The structure between the theme and the leaf node represent the props & state of the component, e.g. `light.primary.hover.backgroundColor` is the background-color in the light theme for a primary button that is being hovered over. Or rather, the value for that key is the variable name (in the variables file mentioned in the previous step) that should be used.
    ```json
        {
            "light": {
                "foo": {
                    "bar": {
                        "prop1": "hs-variable-1",
                        "prop2": "hs-variable-2"
                    },
                    "state1": {
                        "prop1": "hs-variable-3"
                    }
                }
            }
        }
    ```
4. Replace the builtin styles such that they can be themed
    1. For web, start off by finding the style file for this component, e.g. `node_modules/antd/es/__TEMPLATE__/style/index.less` which should look kinda like:
        ```less
        @import "../../style/themes/default";

        .@{ant-prefix}-__TEMPLATE__ {
            css-prop-1: @variable-name-1;
            css-prop-2: @variable-name-2;

            &-state-1 {
                css-prop-1: @variable-name-3;
                css-prop-3: 8px;
            }

            // etc...
        }
        ```
        and in your `styles.web.js` file, replace the `/* styles go here */` placeholder with some styles that are equivalent to the original antd less file; some copy/pasting can be done, but there is a **fundamental paradigm shift**: antd will add & remove css classes to match the current props and state, e.g. a primary button that is loading will have 3 classes: `ant-btn`, `ant-btn-primary` and `ant-btn-loading`; and if it's a small button, it'll also have `ant-btn-sm`. styled-components on the other hand puts exactly 2 classes on a component: 1 to indicate the component itself, and the other to indicate the current **aggregate** state. What this means for you is that instead of overriding a css value with an additional class, you have to override it in the css value itself. Also, to retrieve a variable, you use the `lookup` function which looks it up in the current theme (see the previous step) e.g.:
        ```less
        css-prop-1: ${lookup(({ state1 }) => `foo.${state1 ? "state1" : "bar"}.prop1`)};
        css-prop-2: ${lookup`foo.bar.prop2`};
        css-prop-3: 8px;
        ```
        And basically, it all has to be flattened. The only child selectors will mostly just be for mouse interactions and child components.
    2. For RN, again start off by finding the style file for the component, e.g. `node_modules/antd-mobile-rn/es/__TEMPLATE__/style/index.native.js` which should look kinda like:
        ```js
        import variables from '../../style/themes/default.native';
        export default {
            styleName1: {
                rnCssProp1: variables.variable_name_1,
                rnCssProp2: variables.variable_name_2
            },
            baseStyles: {
                rnCssProp3: variables.variable_name_3,
                rnCssProp4: "8px"
            }
            // etc...
        };
        ```
        figure out which styles are applied to the outermost element, and which are nested. In your `styles.native.js`, copy the base styles to the block that reads `/* base styles go here */` in the same style as for web, e.g. it looks like css and use the `lookup` function, e.g.:
        ```less
        css-prop-3: ${lookup`foo.bar.prop3`};
        css-prop-4: 8px;
        ```
        And the nested styles go where it says `/* nested styles go here */`. One additional step is that the nested styles should be... well... nested... inside css selectors that correspond to the style names in the original file, e.g. `styleName1` in the example above:
        ```less
        .styleName1 {
            css-prop-1: ${lookup`foo.bar.prop1`};
            css-prop-2: ${lookup`foo.bar.prop2`};
        }
        ```
        If one of those selectors is based on a prop, e.g. a `type` prop, you can do that like:
        ```less
        #${p => p.type}Something { ... }
        ```
5. We also need to make the props (and in many cases their values) consistent, e.g. if the web version of a component takes a `type` prop which could have value `primary`, `default`, or `warning` and the mobile component has a `btnType` prop which could have value `main`, `secondary`, or `dangerWillRobinson`, we have some work to do. Open up the `prop_types.js` file, and note the 4 exports; the default export is the prop types themselves. PropTypes are used by React itself to validate props that are passed into a component, and you can find the official documentation here: https://reactjs.org/docs/typechecking-with-proptypes.html; let's say our component takes 2 props, foo & bar, 1 of them is a string, and the other is a number, and only 1 of them is required:
    ```js
    export default {
        foo: PropTypes.string.isRequired,
        bar: PropTypes.number,
    }
    ```
    You can also specify default values for any prop:
    ```js
    export const defaultProps = {
        bar: 1.23,
    };
    ```
    And now for the important stuff: MAPPING props between what we expect and what antd expects. There are 2 more exports: `mapPropsForWeb` and `mapPropsForMobile`; let's map the `type`/`btnType` example above:
    ```js
    export function mapPropsForWeb (props) {
        return {
            // The antd web version of the type prop looks pretty good to me, so...
            type: props.type,
        };
    }

    export function mapPropsForMobile (props) {
        return {
            // but the mobile version is subpar, and needs to match, so...
            type: (type => ({
                // this is a map of our enum -> antd's enum
                primary: "main",
                default: "secondary",
                warning: "dangerWillRobinson",
            }[type] || type))(props.type),
        };
    }
    ```
6. What if there is missing functionality between the web & mobile version of a component. What if calling 2 different components "equivalent" is a bit of a stretch? If so, we have our work cut out for us. There are a few different options to handling these "gaps":
    1. disable the functionality that is missing. An example of this from the `button` component is disabling the `circle` button prop or the `dashed` type.
    2. adding/polyfilling the missing functionality. An example of this from the `button` component is adding support for the `icon` prop on mobile.
    Implementing these polyfills has to be handled on a case by case example, so, I'm not going to provide any examples here. Instead, take a look at any of the existing components and you'll probably find some examples.
7. We also need to write some stories for our component. Open up `stories.js`. At a minimum, you need to fill in the `options` story for both web & native, including `knobs` for every prop. Here's an example, assuming the `foo`, `bar`, and `type` props used before:
```js
    <MyComponent
        foo={text("Foo", "default foo")}
        bar={number("Bar", 0)}
        type={select("Type", ["primary", "default", "warning"], "default")}
    />
```
    The full set of available knobs are imported in the template for this file, and documentation for them can be found here: https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs#available-knobs
8. Finally, we need some Sketch stories for our component. Open up `sketch_stories.js`. This file should generate stories for every (reasonable) combination of props.