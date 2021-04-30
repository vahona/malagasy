import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SectionHeader from './SectionHeader'
import ToolButton from '../ToolButton/ToolButton'
import ToolButtonstory from '../ToolButton/ToolButton.stories'
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton'

import Croi from '../ImageIcon/Croi.svg'
import Doubleticked from '../ImageIcon/Doubleticked'
import Home from '../ImageIcon/Home.svg'
import Inferieur from '../ImageIcon/Inferieur.svg'
import Whiteticked from '../ImageIcon/Whiteticked.svg'

import SwitchIcon from '../ImageIcon/SwitchIcon.svg'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',

    },

    english: {
        color: 'rgba(255, 255, 255, 1)',
        marginRight: 5.93
    },

    malagasy: {
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 5.93
    },

    title: {
        color: 'rgba(6, 182, 212, 1)',
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 36,
        marginTop: 14,
        marginLeft: 22

    },

    smallContainer: {
        backgroundColor: '#FFFFFF',
        width: 411,
        height: 61,
        marginTop: 32,
        marginLeft: 32
    }


})


storiesOf('SectionHeader', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .add('Title', () => (
        <SectionHeader>
            <View style={styles.smallContainer}>
                <Text style={styles.title}> Learn Malagasy </Text>
            </View>
        </SectionHeader>
    ))
    .add('Home', () => (
        <SectionHeader style={styles.container}>
            <ToolButton>
                <Croi />
            </ToolButton>
            <LanguageSwitcherButton>
                <Text style={styles.english}>EN</Text>
                <SwitchIcon />
                <Text style={styles.malagasy}>MA</Text>
            </LanguageSwitcherButton >
            <ToolButton>
                <Whiteticked />
            </ToolButton>
            <ToolButton>
                <Doubleticked />
            </ToolButton>
            <ToolButton>
                <Home />
            </ToolButton>
        </SectionHeader>
    ))
    .add('Learning', () => (
        <SectionHeader>
            <ToolButton>
                <Inferieur />
            </ToolButton>
            <LanguageSwitcherButton>
                <Text style={styles.english}>EN</Text>
                <SwitchIcon />
                <Text style={styles.malagasy}>MA</Text>
            </LanguageSwitcherButton >
            <ToolButton>
                <Home />
            </ToolButton>
        </SectionHeader>
    ))
