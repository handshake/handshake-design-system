import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'antd';

storiesOf('AntD/Button', module)
    .addDecorator(withKnobs)
    .add(
        'intro',
        withInfo({
            header: false,
            text: `
                ### Usage
                ~~~js
                import { Button } from 'antd';
                ~~~
            `,
        })(() => (
            <Button
                disabled={boolean("Disabled", false)}
                ghost={boolean("Ghost", false)}
                htmlType={select("HTML element type", ["button", "reset", "submit"], "button")}
                loading={boolean("Loading", false)}
                onClick={action("clicked")}
                size={select("Size", ["small", "large"], "small")}
                type={select("Type", ["primary", "dashed", "danger"], "primary")}
            >
                {text("Text", "Button Intro")}
            </Button>
        )),
    )
    .add('default', () => (
        <Button>hello</Button>
    ))
    .add('disabled', () => (
        <Button disabled>Disabled</Button>
    ))
    .add('ghost', () => (
        <Button ghost>Ghost</Button>
    ))
    .add('href', () => (
        <Button href="http://localhost:9001/">href</Button>
    ))
    .add('icon', () => (
        <div>
            <Button icon="search">Search</Button>
            <Button icon="copy">copy</Button>
        </div>
    ))
    .add('loading', () => (
        <Button loading>Loading</Button>
    ))
    .add('shape', () => (
        <Button shape="circle">Circle Shape</Button>
    ))
    .add('size', () => (
        <div>
            <Button size="small">Small</Button>
            <Button size="large">Large</Button>
        </div>
    ))
    .add('type', () => (
        <Button.Group>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </Button.Group>
    ))
    .add('onClick', () => (
        <Button onClick={action("clicked")}>onClick</Button>
    ));
