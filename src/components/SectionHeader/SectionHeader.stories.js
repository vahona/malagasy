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


})


storiesOf('SectionHeader', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .add('Title', () => (
        <SectionHeader>
            <Text> Learn Malagasy </Text>
        </SectionHeader>
    ))
    .add('Home', () => (
        <SectionHeader style={styles.container}>
            <ToolButton>
                <Croi />
            </ToolButton>
            <LanguageSwitcherButton>
                <Text style={styles.english}>EN</Text>
                <Text style={styles.malagasy}>MA</Text>
                <SwitchIcon />
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
        <SectionHeader></SectionHeader>
    ))
