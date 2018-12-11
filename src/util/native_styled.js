import _ from "lodash";
import styled from "styled-components/native";

const EXTRACT_RULESETS = /(?:[#.](\w+)|(\[\w+\])) \{([^}]+)\}/gm;
const EXTRACT_ATTR_NAME = /^\[(\w+)\]$/;
const EXTRACT_COMMENTS = /\/\*[^(*/)]*\*\//gm;
const EXTRACT_KEY_VALUE_PAIRS = /\b([\w-]+): ([^;]+);/gm;
const SPLIT_HERE = /\/\* SPLIT HERE: DO NOT DELETE \*\//;

function parse (css) {
    return (props) => {
        const styles = {};
        const attrs = {};
        css.map(chunk => (typeof chunk === "function" ? chunk(props) : chunk))
            .join("")
            .replace(EXTRACT_COMMENTS, "")
            .replace(EXTRACT_RULESETS, (_1, name, attr, rules) => {
                const target = {};
                if (attr) {
                    attrs[attr.match(EXTRACT_ATTR_NAME)[1]] = target;
                } else {
                    styles[name] = target;
                }
                rules.replace(EXTRACT_KEY_VALUE_PAIRS, (_2, key, value) => {
                    target[_.camelCase(key)] = value;
                });
            });
        return { styles, ...attrs };
    };
}

export default function rnStyled (Component, css) {
    const base = [];
    const nested = [];
    let current = base;
    css.forEach((chunk) => {
        if (SPLIT_HERE.test(chunk)) {
            const [before, after] = chunk.split(SPLIT_HERE);
            base.push(before);
            nested.push(after);
            current = nested;
        } else {
            current.push(chunk);
        }
    });
    return styled(Component).attrs(parse(nested))`${base}`;
}
