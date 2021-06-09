
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ToolButton from './ToolButton';

import Croi from '../ImageIcon/Croi.svg' // Instead of the name of the svg in French, use a name that describes what it is for. 
import Doubleticked from '../ImageIcon/Doubleticked'
import Home from '../ImageIcon/Home.svg'
import Inferieur from '../ImageIcon/Inferieur.svg'
import Whiteticked from '../ImageIcon/Whiteticked.svg'



storiesOf('ToolButton', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('Croi', () => (
        <ToolButton  >
            <Croi width={14} height={14} />
        </ToolButton>
    ))
    .add('Ticked', () => (
        <ToolButton  >
            <Whiteticked width={17.6} height={13.5} />
        </ToolButton>
    ))
    .add('DoubleTicked', () => (
        <ToolButton  >
            <Doubleticked width={23.25} height={13.41} />
        </ToolButton>
    ))
    .add('Inferieur', () => (
        <ToolButton  >
            <Inferieur width={7.41} height={12} />
        </ToolButton>
    ))
    .add('Home', () => (
        <ToolButton>
            <Home width={22.62} height={22.62} />
        </ToolButton>
    ))


