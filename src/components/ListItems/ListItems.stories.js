
import React, { useState } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ListItems from './ListItems';

const styles = StyleSheet.create({
    topic: {
        marginLeft: 18,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#111827'

    }
})


storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List of topic', () => <ListItems >
        <Text style={styles.topic}> All </Text>
    </ListItems>)
    .add('List of seen phrases', () => <ListItems ><View><Text style={styles.topic}>Words and phrases</Text></View></ListItems>)











