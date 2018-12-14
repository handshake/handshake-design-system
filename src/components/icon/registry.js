import _ from "lodash";
import colorPalette from "../../util/antd_color_palette";

const normalize = id => _.kebabCase(id).toLowerCase();

class IconRegistry {
    aliases = {};

    sets = {};

    fallbacks = {
        filled: "outlined",
        outlined: "filled",
        twoTone: "filled",
    }

    colorMaps = {
        filled: {
            fill: ["fillColor", "strokeColor", "color"],
            stroke: ["strokeColor", "fillColor", "color"],
        },
        outlined: {
            fill: ["fillColor", null],
            stroke: ["strokeColor", "color"],
        },
        twoTone: {
            fill: ["fillColor", ({ color, strokeColor }) => colorPalette(strokeColor || color, 0)],
            stroke: ["strokeColor", "color"],
        },
        default: {
            fill: ["fillColor", "color"],
            stroke: ["strokeColor", "color"],
        },
    }

    lookupId (id) {
        if (this.aliases[id]) {
            // eslint-disable-next-line no-param-reassign
            id = this.aliases[id];
        }
        const [prefix, ...rest] = normalize(id).split("-");
        return [prefix, rest.join("-")];
    }

    getSet (setName) {
        const set = this.sets[setName];
        if (!set) {
            // eslint-disable-next-line no-console
            console.error(`No IconSet named "${setName}" is defined.`);
            return null;
        }
        return set;
    }

    getIcon (id, set, iconName) {
        const icon = set[iconName];
        if (!icon) {
            // eslint-disable-next-line no-console
            console.error(`No Icon named "${id}" is defined.`);
            return null;
        }
        return icon;
    }

    get (id, type = "outline") {
        const [prefix, iconName] = this.lookupId(id);
        const set = this.getSet(prefix);
        if (!set) {
            return null;
        }
        const icon = this.getIcon(id, set, iconName);
        if (!icon) {
            return null;
        }
        let iconType = icon[type];
        let fallbacks;

        if (!iconType) {
            fallbacks = _.merge({}, this.fallbacks, set.__fallbacks__, icon.__fallbacks__);
            // eslint-disable-next-line no-console
            console.warn(`Icon "${id}" does not have a "${type}" type; falling back to "${
                fallbacks[type]}"`);
            iconType = icon[fallbacks[type]];
        }

        if (!iconType) {
            const firstType = Object.keys(icon)[0];
            if (!firstType) {
                // eslint-disable-next-line no-console
                console.error(`Icon "${id}" is defined, but empty. Oops.`);
                return null;
            }
            // eslint-disable-next-line no-console
            console.warn(`Icon "${id}" does not have a "${fallbacks[type]
                }" type; falling back to first type`);
            iconType = icon[firstType];
        }

        return iconType;
    }

    mapColors (id, type, colors) {
        const [prefix, iconName] = this.lookupId(id);
        const set = this.getSet(prefix);
        if (!set) {
            return {};
        }
        const icon = this.getIcon(id, set, iconName);
        if (!icon) {
            return {};
        }

        const colorMaps = _.merge({}, this.colorMaps, set.__colorMaps__, icon.__colorMaps__);
        let colorMap = colorMaps[type];
        if (!colorMap) {
            console.warn(`No "${type}" color map found; using default`);
            colorMap = colorMaps.default;
        }

        return _.mapValues(colorMap, list => _.find(list.map(key => (
            key && (typeof key === "string" ? colors[key] : key(colors))
        ))) || "none");
    }

    keys () {
        return _.uniq(_.flatten([
            ..._.map(this.sets,
                (icons, setName) => _
                    .keys(icons)
                    .filter(iconName => !/^__/.test(iconName))
                    .map(iconName => `${setName}-${iconName}`),
            ),
            ..._.keys(this.aliases),
        ])).sort();
    }

    register (setName, iconName, icon, opts) {
        // eslint-disable-next-line no-param-reassign
        setName = normalize(setName);

        if (setName.split("-").length > 1) {
            // eslint-disable-next-line no-console
            console.error(`Could not register IconSet named "${setName
                }" because it has more than 1 word.`);
            return;
        }

        if (!this.sets[setName]) {
            this.sets[setName] = {};
        }

        const set = this.sets[setName];
        let icons;
        let options;

        if (typeof iconName === "string") {
            icons = { [iconName]: icon };
            options = opts || {};
        } else {
            icons = iconName;
            options = icon || {};
        }

        Object.assign(set, _.mapKeys(icons, (__, key) => normalize(key)));

        if (options.aliases) {
            this.alias(options.aliases);
        }

        if (options.colorMaps) {
            set.__colorMaps__ = options.colorMaps;
        }

        if (options.fallbacks) {
            set.__fallbacks__ = options.fallbacks;
        }
    }

    unregister (setName, ...iconNames) {
        // eslint-disable-next-line no-param-reassign
        setName = normalize(setName);

        if (!iconNames) {
            delete this.sets[setName];
            return;
        }

        const set = this.sets[setName];

        if (!set) {
            return;
        }

        iconNames.forEach((iconName) => {
            delete set[normalize(iconName)];
        });
    }

    alias (aliases) {
        if (typeof aliases === "string") {
            // eslint-disable-next-line no-param-reassign, prefer-rest-params
            aliases = { [aliases]: arguments[1] };
        }

        Object.assign(this.aliases, _.mapValues(
            _.mapKeys(aliases, (__, key) => normalize(key)),
            normalize),
        );
    }

    unalias (...iconNames) {
        iconNames.forEach((iconName) => {
            delete this.aliases[normalize(iconName)];
        });
    }
}

const registry = new IconRegistry();

export default registry;
