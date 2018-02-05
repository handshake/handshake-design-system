import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'semantic-ui-react';

storiesOf('Semantic UI/Button', module)
    .addDecorator(withKnobs)
    .add(
        'intro',
        withInfo({
            header: false,
            text: `
                ### Usage
                ~~~js
                import { Button } from 'semantic-ui-react';
                ~~~
            `,
        })(() => (
            <Button
                active={boolean("Active", false)}
                as={select("HTML element type", ["button", "reset", "submit"], "button")}
                basic={boolean("Basic", false)}
                circular={boolean("Circular", false)}
                color={select("Color", ["none", "red","orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], "none")}
                content={text("Primary Content", "Button Intro")}
                disabled={boolean("Disabled", false)}
                floated={select("Floated", ["none", "right", "left"], "none")}
                fluid={boolean("Fluid", false)}
                loading={boolean("Loading", false)}
                negative={boolean("Negative", false)}
                onClick={action("clicked")}
                positive={boolean("Positive", false)}
                primary={boolean("Primary", false)}
                secondary={boolean("Secondary", false)}
                size={select("Size", ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], "small")}
            >
            </Button>
        )),
    )
    .add('default', () => (
        <Button>hello</Button>
    ));
