import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import NextButton from './NextButton';


storiesOf('NextButton', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('disableAdd', () => (
        <NextButton onPress={action('clicked-text')}>
            <Text>{text('Add')}</Text>
        </NextButton>
    ))
    .add('ableAdd', () => (
        <NextButton onPress={action('clicked-emoji')}>
            <Text>{text('Add')} </Text>
        </NextButton>
    ));
