import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { Button } from 'antd';

storiesOf('AntD/Button', module)
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
