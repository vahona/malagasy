
import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ListItems from './ListItems';

const functionToOpenNewPage = () => {
    return alert("Topic Detail")
}



storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List', () => <ListItems label={'List'} display={'flex'} />)
    .add('ListLinking', () => <ListItems label={'ListLinking'} display={'flex'} onPress={functionToOpenNewPage} />);










