import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'grommet';

storiesOf('Grommet IO/Button', module)
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
                accent={boolean("Accent", false)}
                critical={boolean("Critical", false)}
                fill={boolean("Fill", false)}
                label={text("Label", "Button intro")}
                onClick={action("clicked")}
                plain={boolean("Plain", false)}
                primary={boolean("Primary", false)}
                secondary={boolean("Secondary", false)}
                type={select("HTML element type", ["button", "reset", "submit"], "button")}
            />
        )),
    )
    .add('default', () => (
        <Button>hello</Button>
    ));
