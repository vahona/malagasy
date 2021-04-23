
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ListItem from './ListItem';


storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List', () => <ListItem label={'List'} display={'flex'} />);
