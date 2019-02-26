/* eslint-disable implicit-arrow-linebreak */
const _ = require("lodash");

const types = ["primary", "secondary", "confirm", "danger", "link"];
const sizes = ["large", "small"];
const icons = [undefined, "ant-plus"];
const states = [undefined, "disabled", "loading"];

export const envs = ["Web", "Mobile"];

// TODO: hover & active

const names = [];
types.forEach(type =>
    sizes.forEach(size =>
        icons.forEach(icon =>
            states.forEach(state =>
                !(icon && state === "loading")
                && names.push(`${type}[${size}]${icon ? "+icon" : ""}${state ? `:${state}` : ""}`),
            ),
        ),
    ),
);

export default _.compact(names);

if (typeof window !== "undefined") {
    const { storiesOf } = require("@storybook/react");
    const React = require("react");
    const WebButton = require("./index.web").default;
    const MobileButton = require("./index.native").default;

    [
        ["Web", WebButton],
        ["Mobile", MobileButton],
    ].forEach(([env, Button]) => {
        const sketchStory = storiesOf(`${env}/Button/💎`, module);
        types.forEach(type =>
            sizes.forEach(size =>
                icons.forEach(icon =>
                    states.forEach(state =>
                        !(icon && state === "loading")
                        && sketchStory.add(
                            `${type}[${size}]${icon ? "+icon" : ""}${state ? `:${state}` : ""}`,
                            () => (
                                <div style={{ display: "inline-block" }}>
                                    <Button
                                        block={false}
                                        disabled={state === "disabled"}
                                        icon={icon}
                                        loading={state === "loading"}
                                        size={size}
                                        type={type}
                                    >
                                        {_.upperFirst(type)}
                                    </Button>
                                </div>
                            ),
                        ),
                    ),
                ),
            ),
        );
    });
}
