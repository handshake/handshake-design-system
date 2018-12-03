/* eslint-disable implicit-arrow-linebreak */
const _ = require("lodash");

const prop1 = ["foo", "bar", "baz"];
const prop2 = ["hum", "bug"];
const prop3 = [undefined, "whatever"];

export const envs = ["Web", "Mobile"];

const names = [];
prop1.forEach(p1 =>
    prop2.forEach(p2 =>
        prop3.forEach(p3 =>
            names.push(`${p1}[${p2}]:${p3 ? `:${p3}` : ""}`),
        ),
    ),
);

export default _.compact(names);

if (typeof window !== "undefined") {
    const { storiesOf } = require("@storybook/react");
    const React = require("react");
    // eslint-disable-next-line camelcase
    const Web__TEMPLATE__ = require("./index.web").default;
    // eslint-disable-next-line camelcase
    const Mobile__TEMPLATE__ = require("./index.native").default;

    [
        // eslint-disable-next-line camelcase
        ["Web", Web__TEMPLATE__],
        // eslint-disable-next-line camelcase
        ["Mobile", Mobile__TEMPLATE__],
    ].forEach(([env, __TEMPLATE__]) => {
        const sketchStory = storiesOf(`${env}/__TEMPLATE__/💎`, module);
        prop1.forEach(p1 =>
            prop2.forEach(p2 =>
                prop3.forEach(p3 =>
                    sketchStory.add(
                        `${p1}[${p2}]:${p3 ? `:${p3}` : ""}`,
                        () => (
                            <div style={{ display: "inline-block" }}>
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <__TEMPLATE__
                                    prop1={p1}
                                    prop2={p2}
                                    prop3={p3}
                                >
                                    {_.upperFirst(p1)}
                                </__TEMPLATE__>
                            </div>
                        ),
                    ),
                ),
            ),
        );
    });
}
