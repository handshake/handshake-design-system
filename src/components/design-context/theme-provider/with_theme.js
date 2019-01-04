/* eslint-disable no-use-before-define */
/* global keys, window */
import _ from "lodash";
import { Component } from "react";
import flatten from "flat";
import { generate as generatePalette } from "ant-design-palettes";
import PropTypes from "prop-types";
import ThemeContext from "./context";
import TinyColor from "tinycolor2";

const FN_REGEX = /^(\w+)\(([^)]*)\)$/;

const fns = {
    palette: (color, i) => generatePalette(color)[i],
    lighten: (color, amount) => new TinyColor(color).lighten(amount).toString(),
    brighten: (color, amount) => new TinyColor(color).brighten(amount).toString(),
    darken: (color, amount) => new TinyColor(color).darken(amount).toString(),
    desaturate: (color, amount) => new TinyColor(color).desaturate(amount).toString(),
    saturate: (color, amount) => new TinyColor(color).saturate(amount).toString(),
    greyscale: color => new TinyColor(color).greyscale().toString(),
    spin: (color, amount) => new TinyColor(color).spin(amount).toString(),
    analogous: (color, num, slices, i) => new TinyColor(color)
        .analogous(num, slices)[i].toString(),
    complement: color => new TinyColor(color).complement().toString(),
    monochromatic: (color, num, i) => new TinyColor(color).monochromatic(num)[i].toString(),
    splitcomplement: (color, i) => new TinyColor(color).splitcomplement()[i].toString(),
    triad: (color, i) => new TinyColor(color).triad()[i].toString(),
    tetrad: (color, i) => new TinyColor(color).tetrad()[i].toString(),
    mostReadable: (baseColor, ...colorList) => TinyColor
        .mostReadable(baseColor, colorList).toString(),
};

export const fnHelp = {
    palette: {
        desc: "Ant Design's custom palette function",
        args: ["color", "index"],
    },
    lighten: {
        desc: "Lighten a color by a percentage amount",
        args: ["color", "amount"],
    },
    brighten: {
        desc: "Brighten a color by a percentage amount",
        args: ["color", "amount"],
    },
    darken: {
        desc: "Darken a color by a percentage amount",
        args: ["color", "amount"],
    },
    desaturate: {
        desc: "Desaturate a color by a percentage amount",
        args: ["color", "amount"],
    },
    saturate: {
        desc: "Saturate a color by a percentage amount",
        args: ["color", "amount"],
    },
    greyscale: {
        desc: "Grayscale version of a color",
        args: ["color"],
    },
    spin: {
        desc: "Rotate the hue of a color by a degree amount",
        args: ["color", "amount"],
    },
    analogous: {
        desc: "Find an analogous color. Advanced Use.",
        args: ["color", "num", "slices", "index"],
    },
    complement: {
        desc: "Find a complement of a color",
        args: ["color"],
    },
    monochromatic: {
        desc: "TODO",
        args: ["color", "index"],
    },
    splitcomplement: {
        desc: "Left or Right hand split complement",
        args: ["color", "index"],
    },
    triad: {
        desc: "One of a triad of similar colors",
        args: ["color", "index"],
    },
    tetrad: {
        desc: "One of a tetrad of similar colors",
        args: ["color", "index"],
    },
    mostReadable: {
        desc: "Select color that is most readable on a given background",
        args: ["baseColor", "color1", "color2"],
    },
};

export function withTheme (callback, { themes, themeName, variables }) {
    const theme = themes[themeName];

    function expand (value, path, extraArgs) {
        const valueTokens = value.toString().split(".");
        const pathTokens = path.toString().split(".");
        let newPath;
        if (valueTokens.length > 1) {
            pathTokens.splice(
                pathTokens.length - valueTokens.length + 1,
                valueTokens.length - 1,
                ...valueTokens.slice(1),
            );
            newPath = pathTokens.join(".");
            if (_.has(theme, newPath)) {
                return innerLookup(newPath, newPath, extraArgs);
            }
        }
        let i = pathTokens.length;
        while (i >= 0) {
            i -= 1;
            newPath = [...pathTokens.slice(0, i - 1), "default", ...pathTokens.slice(i)].join(".");
            if (newPath !== path && _.has(theme, newPath)) {
                return innerLookup(newPath, newPath, extraArgs);
            }
        }
        return null;
    }

    function lookupFn (value, origPath, extraArgs) {
        const data = value.match(FN_REGEX);
        let [fn, args] = data.slice(1); // eslint-disable-line prefer-const
        args = args.split(/,\s*/g).map((arg) => {
            if (/^_/.test(arg)) {
                // eslint-disable-next-line no-param-reassign
                arg = expand(arg, origPath, extraArgs);
            }
            try {
                return JSON.parse(arg);
            } catch (e) {
                return innerLookup(arg, origPath, extraArgs);
            }
        });
        try {
            return fns[fn](...args);
        } catch (e) {
            return value;
        }
    }

    function innerLookup (path, origPath, extraArgs) {
        let value = _.get(theme, path)
            || ((/^\w+(?:\.\w+)+/.test(path) && !path.startsWith("hs")) ? "_" : path);
        if (typeof value === "function") {
            value = value(...extraArgs);
        }
        if (/^_/.test(value)) {
            value = expand(value, origPath, extraArgs);
        } else if (/^hs/.test(value) && variables[value]) {
            value = variables[value];
        } else if (FN_REGEX.test(value)) {
            value = lookupFn(value, origPath, extraArgs);
        }
        return value;
    }

    function outerLookup (path, ...extraArgs) {
        const value = innerLookup(path, path, extraArgs);
        if (typeof keys === "function" && keys.toString().indexOf("Command Line API") !== -1) {
            if (TinyColor(value)._ok) {
                console.log("%s = %s %c  ", path, value,
                    `background: ${TinyColor(value).toHexString()}; font-size: x-large;`);
            } else {
                console.log("%s = %s", path, value);
            }
        }
        return value;
    }

    function colorDifference (_a, _b) {
        const a = TinyColor(_a).toRgb();
        const b = TinyColor(_b).toRgb();
        return (Math.abs(a.r - b.r)
            + Math.abs(a.g - b.g)
            + Math.abs(a.b - b.b)
            + 100 * Math.abs(a.a - b.a)
        ) / (255 * 3 + 100);
    }

    if (window.STORYBOOK_ENV) {
        window.lookup = outerLookup;

        window.__deriveColorTransformation__ = (original, target) => {
            console.log("********");
            console.log(
                "Original = %c  ", `background: ${outerLookup(original)}; font-size: x-large;`);
            console.log("Target = %c  ", `background: ${target}; font-size: x-large;`);
            console.log("********");

            let closest = original;

            // Goal is to get this to 0.0000000
            let lastDifference = colorDifference(original, target);

            function test (path) {
                const value = outerLookup(path);
                const difference = colorDifference(value, target);
                if (difference < lastDifference) {
                    closest = path;
                    lastDifference = difference;

                    if (difference === 1) {
                        console.log("********");
                        console.log("EXACT MATCH! WE HAVE A WINNER!");
                        console.log(path);
                        return true;
                    }
                }
                return false;
            }

            // Brute Force Approach

            const origString = _.has(theme, original)
                ? original
                : `"${original}"`;

            for (let i = 0; i <= 9; i += 1) {
                if (test(`palette(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 100; i += 1) {
                if (test(`lighten(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 100; i += 1) {
                if (test(`darken(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 100; i += 1) {
                if (test(`brighten(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 100; i += 1) {
                if (test(`saturate(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 99; i += 1) {
                if (test(`desaturate(${origString}, ${i})`)) return;
            }

            if (test(`greyscale(${origString})`)) return;

            for (let i = 1; i <= 5; i += 1) {
                if (test(`analogous(${origString}, 6, 30, ${i})`)) return;
            }

            for (let i = 0; i <= 5; i += 1) {
                if (test(`monochromatic(${origString}, 6, ${i})`)) return;
            }

            for (let i = 1; i <= 360; i += 1) {
                if (test(`spin(${origString}, ${i})`)) return;
            }

            if (test(`complement(${origString})`)) return;

            for (let i = 1; i <= 2; i += 1) {
                if (test(`triad(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 3; i += 1) {
                if (test(`tetrad(${origString}, ${i})`)) return;
            }

            for (let i = 1; i <= 2; i += 1) {
                if (test(`splitcomplement(${origString}, ${i})`)) return;
            }

            console.log("********");
            const closestValue = outerLookup(closest);
            console.log(
                "NO EXACT MATCH. THE CLOSEST IS OFF BY %s%: %s",
                (lastDifference * 100).toFixed(2), closest);
            console.log("COMPARE target (%s) %c  %c to match (%s) %c  ",
                target,
                `background-color: ${target};`,
                "background-color: transparent;",
                closestValue,
                `background-color: ${TinyColor(closestValue).toHexString()};`,
            );
        };
    }

    return callback({
        // wrapped this way to avoid a React DOM warning:
        //     Warning: Invalid value for prop `lookup` on <button> tag.
        //     Either remove it from the element, or pass a string or number
        //     value to keep it in the DOM.
        // in the case that this is passed to a low level DOM model,
        // e.g. `div` or `button`; if anyone can think of a better name,
        // please let Kevan know and we'll swap it out.
        lkp: { fn: outerLookup },
        lookup: outerLookup,
        theme,
        variables,
    });
}

export default class WithTheme extends Component {
    static contextType = ThemeContext;

    static propTypes = {
        children: PropTypes.func,
        themes: PropTypes.object,
        themeName: PropTypes.string,
    }

    render () {
        const { children: fn, themes, themeName } = this.props;
        const { theme: ctxThemeName, variables } = this.context;

        return withTheme(fn, { themes, themeName: themeName || ctxThemeName, variables });
    }
}

export function getThemeVariables (themes, themeName = "light") {
    return _.uniq(_.values(flatten(themes[themeName])).filter(v => /^hs/.test(v)));
}

export function lookup (cb) {
    return ({ lkp: { fn }, ...props }) => fn(
        typeof cb === "function"
            ? cb(props)
            : cb[0].replace(/\$\((\w+)\)/g, (__, k) => props[k]),
    );
}
