import { action, decorateAction } from "@storybook/addon-actions";
import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import { withViewport } from "@storybook/addon-viewport";

import { Avatar, Card, Icon } from "../..";
import { Card as NativeCard, Text } from "../../index.native";

storiesOf("AntD/Card", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
        "Basic Options",
        () => (
            <Card
                headStyle={object("Head Style", {})}
                bodyStyle={object("Body Style", {})}
                bordered={boolean("Bordered", false)}
                hoverable={boolean("Hoverable", false)}
                loading={boolean("Loading", false)}
                style={object("Card Style", {})}
                title={text("Title", "Example")}
                type={select("Type", [undefined, "inner"])}
            >{text("Content", "Sample Content")}</Card>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Card } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    )
    .add(
        "Actions",
        () => (
            <Card
                actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />,
                ]}
                bordered
                title="Actions Example"
            >Sample Content</Card>
        ),
    )
    .add(
        "Cover",
        () => (
            <Card
                bordered
                cover={<img src={`https://picsum.photos/200?random&blur`} />}
                hoverable
                style={object("Style", {
                    margin: 10,
                    width: 200,
                })}
                title="Cover Example"
            >Sample Content</Card>
        ),
    )
    .add(
        "Extra",
        () => (
            <Card
                extra={<Icon theme="filled" type="close-square" />}
                title="Extra Example"
            >Sample Content</Card>
        ),
    )
    .add(
        "Tabs",
        () => {
            class CardWithState extends Component {
                state = {
                    activeTabKey: "Tab 1",
                }

                render () {
                    return (
                        <Card
                            activeTabKey={this.state.activeTabKey}
                            tabList={[
                                { key: "Tab 1", tab: <div>Tab 1</div>},
                                { key: "Tab 2", tab: <div>Tab 2</div>},
                            ]}
                            title="Tabs Example"
                            onTabChange={decorateAction([([tab]) => {
                                this.setState(({ activeTabKey: tab }));
                                return [tab];
                            }])("Tab changed")}
                        >
                            {this.state.activeTabKey === "Tab 1" ?
                                "Tab 1 Content" :
                                "Tab 2 Content"
                            }
                        </Card>
                    )
                }
            }

            return <CardWithState />;
        }
    )
    .add(
        "Grid",
        () => (
            <Card
                title="Grid Example"
            >
                <Card.Grid>Grid Cell 1</Card.Grid>
                <Card.Grid>Grid Cell 2</Card.Grid>
                <Card.Grid>Grid Cell 3</Card.Grid>
                <Card.Grid>Grid Cell 4</Card.Grid>
            </Card>
        ),
    )
    .add(
        "Meta",
        () => (
            <Card>
                <Card.Meta
                    avatar={<Avatar src={`https://picsum.photos/100?random&blur`} />}
                    title={text("Title", "Meta Example")}
                    description={text("Description", "Sample Content")}
                />
            </Card>
        ),
    );

storiesOf("AntD/Card/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .add(
        "options",
        () => (
            <NativeCard
                full={boolean("Full", false)}
            >
                <NativeCard.Header
                    title={text("Title", "Example")}
                    thumb={text("Thumbnail", "https://picsum.photos/32/?random")}
                    thumbStyle={object("Thumb style", {})}
                    extra={text("Header Right Side Content", "Upper Right")}
                />
                <NativeCard.Body>
                    <Text
                        style={{
                            fontFamily: "BrandonText",
                        }}
                    >{text("Content", "Sample Content")}</Text>
                </NativeCard.Body>
                <NativeCard.Footer
                    content={text("Footer Left Side Content", "Left Side")}
                    extra={text("Footer Right Side Content", "Right Side")}
                />
            </NativeCard>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Card } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );