import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'antd';

storiesOf('AntD/Button', module)
    .add('default', () => (
        <Button>Default</Button>
    ))
    .add('disabled', () => (
        <Button disabled>Disabled</Button>
    ));
