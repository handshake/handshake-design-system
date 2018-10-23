# Technical Overview
## how to wrap an antd/antd-mobile-rn component in design system

1. (easy) Create a new component in design system; this is comprised of 4 files:
    - index.native.js
    - index.web.js
    - prop_types.js
    - stories.js

    The quickest way to create this is to make a copy of the `src/components/__template__` folder and
    rename all instances of `__TEMPLATE__` in the copy.
2. Need to replace the builtin styles such that they can be themed
    1. (easy) For RN this is pretty simple; you find the style file for the component, e.g. `node_modules/antd-mobile-rn/es/__TEMPLATE__/style/index.native.js` which should look kinda like:
        ```js
        import variables from '../../style/themes/default.native';
        export default {
            styleName1: {
                rnCssProp1: variables.variable_name_1,
                rnCssProp2: variables.variable_name_2
            },
            // etc...
        };
        ```
        and in your `index.native.js` locate the `styles` function and copy/paste the antd style return value into the return value of this function, search+replace `variables` -> `theme` and change the vase of the variables from snake_case to lowerCamelCase, e.g.:
        ```js
        function styles (theme) {
            return {
                styleName1: {
                    rnCssProp1: theme.variableName1,
                    rnCssProp2: theme.variableName2,
                },
                // etc...
            };
        }
        ```
        Make sure to add the names of any variables you use to the `THEME_VARIABLES` list.
    2. (hard) For web, this requires some thinking; start off by finding the style file for this component, e.g. `node_modules/antd/es/__TEMPLATE__/style/index.less` which should look kinda like:
        ```less
        @import "../../style/themes/default";

        .@{ant-prefix}-__TEMPLATE__ {
            css-prop-1: @variable-name-1;
            css-prop-2: @variable-name-2;

            &-state-1 {
                css-prop-1: @variable-name-3;
            }

            // etc...
        }
        ```
        and in your `index.web.js` file locate the styled antd component and craft some styles here
        that are equivalent to the original antd less file; some copy/pasting can be done, but there is a **fundamental paradigm shift**: antd will add & remove css classes to match the current props and state, e.g. a primary button that is loading will have 3 classes: `ant-btn`, `ant-btn-primary` and `ant-btn-loading`; and if it's a small button, it'll also have `ant-btn-sm`. styled-components on the other hand puts exactly 2 classes on a component: 1 to indicate the component itself, and the other to indicate the current **aggregate** state. What this means for you is that instead of overriding a css value with an additional class, you have to override it in the css value itself, e.g.:
        ```less
        css-prop-1: ${p => p.state1 ? p.theme.variableName3 : p.theme.variableName1};
        css-prop-2: ${p => p.theme.variableName2};
        ```
        basically, it all has to be flattened. And variable names change to lowerCamelCase and are wrapped in interpolated functions that are passed the `props` (but not the `state`) of the
        component. The only child selectors will mostly just be for mouse interactions and child components.
        Again, make sure to add the names of any variables you use to the `THEME_VARIABLES` list.
3. (medium) We also need to make the props (and in many cases their values) consistent, e.g. if the web version of a component takes a `type` prop which could have value `primary`, `default`, or `warning` and the mobile component has a `btnType` prop which could have value `main`, `secondary`, or `dangerWillRobinson`, we have some work to do. Open up the `prop_types.js` file, and note the 4 exports; the default export is the prop_types themselves. PropTypes are used by React itself to validate props that are passed into a component, and you can find the official documentation here: https://reactjs.org/docs/typechecking-with-proptypes.html; let's say our component takes 2 props, foo & bar, 1 of them is a string, and the other is a number, and only 1 of them is required:
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
            // but the mobile version is subpar, so...
            type: (type => ({
                primary: "main",
                default: "secondary",
                warning: "dangerWillRobinson",
            }[type] || type))(props.type),
        };
    }
    ```
4. (hard-ish) What if there is missing functionality between the web & mobile version of a component. What if calling 2 different components "equivalent" is a bit of a stretch? If so, we have our work cut out for us. There are a few different options to handling these "gaps":
    1. disable the functionality that is missing. An example of this from the `button` component is disabling the `circle` button prop or the `dashed` type.
    2. adding/polyfilling the missing functionality. An example of this from the `button` component is adding support for the `icon` prop on mobile.
    Implementing these polyfills has to be handled on a case by case example, so, I'm not going to provide any examples here. Instead, take a look at any of the existing components and you'll probably find some examples.
5. (easy-ish) We also need to write some stories for our component. Open up `stories.js`. At a minimum, you need to fill in the `options` story, including `knobs` for every prop. Here's an example, assuming the `foo`, `bar`, and `type` props used before:
```js
    <MyComponent
        foo={text("Foo", "default foo")}
        bar={number("Bar", 0)}
        type={select("Type", ["primary", "default", "warning"], "default")}
    />
```
The full set of available knobs are imported in the template for this file, and documentation for them can be found here: https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs#available-knobs