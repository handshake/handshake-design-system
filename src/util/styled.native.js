import _ from "lodash";
import styled, { css } from "styled-components/native";

const EXTRACT_RULESETS = /(?:[#.](\w+)|(\[\w+\])) \{([^}]+)\}/gm;
const EXTRACT_ATTR_NAME = /^\[(\w+)\]$/;
const EXTRACT_COMMENTS = /\/\*[^(*/)]*\*\//gm;
const EXTRACT_KEY_VALUE_PAIRS = /\b([\w-]+): ([^;]+);/gm;

const NUMBERS_THAT_ARE_ACTUALLY_STRINGS = ["fontWeight"];

function parseNested (chunks) {
    return (props) => {
        const styles = {};
        const attrs = {};
        chunks.map(chunk => (typeof chunk === "function" ? chunk(props) : chunk))
            .join("")
            .replace(EXTRACT_COMMENTS, "")
            .replace(EXTRACT_RULESETS, (_1, name, attr, rules) => {
                const target = {};
                let attrName;
                if (attr) {
                    [, attrName] = attr.match(EXTRACT_ATTR_NAME);
                    attrs[attrName] = target;
                } else {
                    styles[name] = target;
                }
                rules.replace(EXTRACT_KEY_VALUE_PAIRS, (_2, key, value) => {
                    const cssName = _.camelCase(key);
                    target[cssName] = (
                        // eslint-disable-next-line no-restricted-globals
                        isNaN(value)
                        || NUMBERS_THAT_ARE_ACTUALLY_STRINGS.includes(cssName)
                    )
                        ? value
                        : parseFloat(value, 10);
                });
                if (attrName === "props") {
                    _.extend(attrs, target);
                    delete attrs.props;
                }
            });
        return { styles, ...attrs };
    };
}

function parseBase (chunks) {
    return props => chunks.map(chunk => (typeof chunk === "function" ? chunk(props) : chunk))
        .join("")
        .replace(EXTRACT_COMMENTS, "")
        .replace(EXTRACT_RULESETS, "");
}

export default function styledWrapper (Component) {
    return (...args) => {
        const chunks = css(...args);
        // TODO: see if there's a way to only have to parse it once
        return styled(Component).attrs(parseNested(chunks))`${parseBase(chunks)}`;
    };
}

styledWrapper.Text = (...args) => (
    styledWrapper(require("@ant-design/react-native/lib/text"))(...args)
);

styledWrapper.View = (...args) => (
    styledWrapper(require("@ant-design/react-native/lib/view"))(...args)
);

// NOTE: we're not reexporting everything from styled-components/native
export { css };
