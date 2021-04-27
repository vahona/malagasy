import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import NextButton from './NextButton';


const styles = StyleSheet.create({
    textdisabled: {
        color: '#06B6D4'
    },

    textable: {
        color: '#FFFFFF'
    },

})

function Disabled() {
    const [disable, setDisable] = useState(true);
    return (
        <NextButton
            disable={true}
        ></NextButton>
    );
}


storiesOf('NextButton', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('disableAdd', () => (
        <NextButton onPress={action('clicked-text')} disable={true}>
            <Text style={styles.textdisabled} >Add</Text>
        </NextButton>
    ))
    .add('ableAdd', () => (
        <NextButton onPress={action('clicked-emoji')} disable={false}>
            <Text style={styles.textable}>Add</Text>
        </NextButton>
    ))
    .add('disableNext', () => (
        <NextButton onPress={action('clicked-emoji')} disable={true}>
            <Text style={styles.textdisabled} >Next</Text>
        </NextButton>
    ))
    .add('ableNext', () => (
        <NextButton onPress={action('clicked-emoji')} disable={false}>
            <Text style={styles.textable}>Next</Text>
        </NextButton>
    ))
