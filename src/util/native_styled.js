import _ from "lodash";
import styled from "styled-components/native";

const EXTRACT_RULESETS = /[#.](\w+) \{([^}]+)\}/gm;
const EXTRACT_COMMENTS = /\/\*[^(*/)]*\*\//gm;
const EXTRACT_KEY_VALUE_PAIRS = /\b([\w-]+): ([^;]+);/gm;
const SPLIT_HERE = /\/\* SPLIT HERE: DO NOT DELETE \*\//;

function parse (text) {
    return (props) => {
        const styles = {};
        text.map(t => (typeof t === "function" ? t(props) : t))
            .join("")
            .replace(EXTRACT_COMMENTS, "")
            .replace(EXTRACT_RULESETS, (_1, name, rules) => {
                styles[name] = {};
                rules.replace(EXTRACT_KEY_VALUE_PAIRS, (_2, key, value) => {
                    styles[name][_.camelCase(key)] = value;
                });
            });
        return styles;
    };
}

export default function rnStyled (Component, css) {
    const base = [];
    const nested = [];
    let current = base;
    css.forEach((chunk) => {
        if (SPLIT_HERE.test(chunk)) {
            const [before, after] = chunk.split(SPLIT_HERE).slice(1);
            base.push(before);
            nested.push(after);
            current = nested;
        } else {
            current.push(chunk);
        }
    });
    return styled(Component).attrs({
        styles: parse(nested),
    })`${css}`;
}
