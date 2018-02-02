import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';

storiesOf('Handshake/Card', module)
    .add('title', () => (
        <Card title="Hi There"></Card>
    ));
