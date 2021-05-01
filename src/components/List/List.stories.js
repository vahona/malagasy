
import React, { useState } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Lists from './List'

const styles = StyleSheet.create({

})


storiesOf('Lists', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List of topic', () => <Lists >

    </Lists>)











