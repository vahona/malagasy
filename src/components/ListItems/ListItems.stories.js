
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ListItems from './ListItems';



// ItemSeparatorComponent = {() => <Separator></Separator>

storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List', () => <ListItems label={'List'} display={'flex'} />);
