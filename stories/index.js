import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';

storiesOf('Card', module)
    .add('with title', () => (
        <Card title="Hi There"></Card>
    ));
