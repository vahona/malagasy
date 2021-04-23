
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ListItems from './ListItems';

const Datas = [
    { data: "All" },
    { data: "Food" },
    { data: "Greetings" },
    { data: "At the restaurant" },
    { data: "Unecessaraly loong cat" },
    { data: "Single words" },
    { data: "At the market" }
]

// ItemSeparatorComponent = {() => <Separator></Separator>

storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List', () => <ListItems label={'List'} display={'flex'} sections={Datas}
        renderItem={({ item }) => item = { item }} />);
