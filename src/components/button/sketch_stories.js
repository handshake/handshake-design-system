const _ = require("lodash");
const types = ["primary", "secondary", "confirm", "danger", "link"];
const sizes = ["large", "small"];
const icons = [undefined, "plus"];
const states = [undefined, "disabled", "loading"];

// TODO: hover & active

const names = [];
types.forEach(type =>
    sizes.forEach(size =>
        icons.forEach(icon =>
            states.forEach(state =>
                !(icon && state === "loading") &&
                names.push(`${type}[${size}]${icon ? "+icon" : ""}${state ? `:${state}` : ""}`),
            )
        )
    )
);

export default _.compact(names);

if (typeof window !== "undefined") {
    const { storiesOf } = require("@storybook/react");
    const React = require("react");
    const Button = require(".").default;

    const sketchStory = storiesOf("Web/Button/💎", module);
    types.forEach(type =>
        sizes.forEach(size =>
            icons.forEach(icon =>
                states.forEach(state =>
                    !(icon && state === "loading") &&
                    sketchStory.add(
                        `${type}[${size}]${icon ? "+icon" : ""}${state ? `:${state}` : ""}`,
                        () => (
                            <Button
                                disabled={state === "disabled"}
                                icon={icon}
                                loading={state === "loading"}
                                size={size}
                                type={type}
                            >
                                {_.upperFirst(type)}
                            </Button>
                        )
                    )
                )
            )
        )
    );
}
