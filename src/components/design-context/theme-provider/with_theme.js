/* global keys, window */
import _ from "lodash";
import { Component } from "react";
import { generate as generatePalette } from "ant-design-palettes"
import ThemeContext from "./context";
import TinyColor from "tinycolor2";

const FN_REGEX = /^(\w+)\(([^,]+(?:,\s*[^,]+)*)\)$/;

const fns = {
    palette: (color, i) => generatePalette(color)[i],
    lighten: (color, amount) => new TinyColor(color).lighten(amount).toString(),
    brighten: (color, amount) => new TinyColor(color).brighten(amount).toString(),
    darken: (color, amount) => new TinyColor(color).darken(amount).toString(),
    desaturate: (color, amount) => new TinyColor(color).desaturate(amount).toString(),
    saturate: (color, amount) => new TinyColor(color).saturate(amount).toString(),
    greyscale: (color) => new TinyColor(color).greyscale().toString(),
    spin: (color, amount) => new TinyColor(color).spin(amount).toString(),
    analogous: (color, num, slices, i) => new TinyColor(color).analogous(num, slices)[i].toString(),
    complement: (color) => new TinyColor(color).complement().toString(),
    monochromatic: (color, num, i) => new TinyColor(color).monochromatic(num)[i].toString(),
    splitcomplement: (color, i) => new TinyColor(color).splitcomplement()[i].toString(),
    triad: (color, i) => new TinyColor(color).triad()[i].toString(),
    tetrad: (color, i) => new TinyColor(color).tetrad()[i].toString(),
}

export function withTheme (callback, { themes, themeName, variables }) {
    const theme = themes[themeName];

    function lookupFn (value, defaultValue, extraArgs) {
        const data = value.match(FN_REGEX);
        if (!data) {
            return null;
        }
        let [fn, args] = data.slice(1);
        args = args.split(/,\s*/g).map((arg) => {
            if (arg === "_") {
                return defaultValue;
            }
            try {
                return JSON.parse(arg);
            } catch (e) {
                return innerLookup(arg, defaultValue, extraArgs);
            }
        });
        return fns[fn](...args);
    }

    function lookupDefault (path, extraArgs) {
        const tokens = path.toString().split(".");
        let i = tokens.length;
        while (i >= 0) {
            i -= 1;
            const defaultPath = [...tokens.slice(0, i - 1), "default", ...tokens.slice(i)].join(".");
            if (defaultPath !== path && _.has(theme, defaultPath)) {
                return innerLookup(defaultPath, "", extraArgs);
            }
        }
        return null; // oh no!
    }

    function innerLookup (path, defaultValue, extraArgs) {
        let value = _.get(theme, path) || path;
        if (typeof value === "function") {
            value = value(...extraArgs);
        }
        if (value === "_") {
            value = defaultValue;
        } else if (variables[_.camelCase(value)]) {
            value = variables[_.camelCase(value)];
        } else if (FN_REGEX.test(value)) {
            value = lookupFn(value, defaultValue, extraArgs);
        }
        return value;
    }

    function lookup (path, ...extraArgs) {
        const value = innerLookup(path, lookupDefault(path, extraArgs), extraArgs);
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

    if (window.STORYBOOK_ENV) {
        window.lookup = lookup;

        function colorDifference (_a, _b) {
            const a = TinyColor(_a).toRgb();
            const b = TinyColor(_b).toRgb();
            return (Math.abs(a.r - b.r)
                + Math.abs(a.g - b.g)
                + Math.abs(a.b - b.b)
                + 100 * Math.abs(a.a - b.a)
            ) / (255 * 3 + 100);
        }

        window.__deriveColorTransformation__ = (original, target) => {
            console.log("********");
            console.log("Original = %c  ", `background: ${lookup(original)}; font-size: x-large;`);
            console.log("Target = %c  ", `background: ${target}; font-size: x-large;`);
            console.log("********");

            let closest = original;

            // Goal is to get this to 0.0000000
            let lastDifference = colorDifference(original, target);

            function test (path) {
                const value = lookup(path);
                const difference = colorDifference(value, target);
                if (difference < lastDifference) {
                    closest = path;
                    lastDifference = difference;

                    if (difference === 1) {
                        console.log("********");
                        console.log("EXACT MATCH! WE HAVE A WINNER!");
                        console.log(path);
                        suppressLoggingLookupResult = false;
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

            if (test(`greyscale(${origString}`)) return;

            for (let i = 1; i <= 5; i += 1) {
                if (test(`analogous(${origString}, 6, 30, ${i})`)) return;
            }

            for (let i = 0; i <= 5; i += 1) {
                if (test(`monochromatic(${origString}, 6, ${i})`)) return;
            }

            for (let i = 1; i <= 360; i += 1) {
                if (test(`spin(${origString}, ${i})`)) return;
            }

            if (test(`complement(${origString}`)) return;

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
            const closestValue = lookup(closest);
            console.log("NO EXACT MATCH. THE CLOSEST IS OFF BY %s%: %s", (lastDifference * 100).toFixed(2), closest);
            console.log("COMPARE target (%s) %c  %c to match (%s) %c  ",
                target,
                `background-color: ${target};`,
                "background-color: transparent;",
                closestValue,
                `background-color: ${TinyColor(closestValue).toHexString()};`
            );
        };
    }

    return callback({
        lookup,
        theme,
        variables,
    });
}

export default class WithTheme extends Component {
    static contextType = ThemeContext;

    render () {
        const { children: fn, themes, themeName } = this.props;
        const { theme: ctxThemeName, variables } = this.context;

        return withTheme(fn, { themes, themeName: themeName || ctxThemeName, variables });
    }
}
