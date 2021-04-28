
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LanguageSwitcherButton from './LanguageSwitcherButton';

import SwitchIcon from '../ImageIcon/SwitchIcon.svg'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    english: {
        color: 'rgba(255, 255, 255, 1)',
        marginRight: 5.93
    },

    malagasy: {
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 5.93
    }
})



storiesOf('LanguageSwitcherButton', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('Switch', () => (
        <LanguageSwitcherButton style={styles.container} >
            <Text style={styles.english}>EN</Text>
            <SwitchIcon width={16.93} height={13.33}
            />
            <Text style={styles.malagasy}>MA</Text>
        </LanguageSwitcherButton>
    ))

