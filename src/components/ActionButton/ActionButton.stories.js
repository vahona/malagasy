import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';
import Ticked from '../ImageIcon/Ticked.svg'
import Vector from '../ImageIcon/Vector.svg';
import Cross from '../ImageIcon/Cross.svg'


const styles = StyleSheet.create({
    containerbutton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19.36,
    },

    learn: {
        color: 'rgba(6, 182, 212, 1)',
        marginRight: 11,

    },

    pick: {
        color: 'rgba(6, 182, 212, 1)',
        marginRight: 11
    },

    correct: {
        color: 'rgba(6, 212, 64, 1)',
        marginRight: 11
    },

    wrong: {
        color: 'rgba(212, 6, 142, 1)',
        marginRight: 11
    }


})

function Actionbutton() {
    return alert("new event")
}


storiesOf('ActionButton', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('Learn', () => (
        <ActionButton onPress={Actionbutton}>
            <View style={styles.containerbutton}>
                <Text style={styles.learn} >Learn</Text>
                <Vector height={16} width={16} />
            </View>
        </ActionButton>
    ))
    .add('Pick', () => (
        <ActionButton onPress={Actionbutton}>
            <View style={styles.containerbutton}>
                <Text style={styles.pick}>  Pick </Text>
                <Vector height={16} width={16} />
            </View>
        </ActionButton>
    ))
    .add('Correct', () => (
        <ActionButton onPress={action('clicked')}>
            <View style={styles.containerbutton}>
                <Text style={styles.correct}> Correct </Text>
                <Ticked height={13.4} width={17.6} />
            </View>
        </ActionButton>
    ))
    .add('wrong', () => (
        <ActionButton onPress={action('clicked')}>
            <View style={styles.containerbutton}>
                <Text style={styles.wrong}> Wrong </Text>
                <Cross height={14} width={14} />
            </View>
        </ActionButton>
    ))
