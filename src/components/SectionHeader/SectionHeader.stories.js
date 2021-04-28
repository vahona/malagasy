import * as React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SectionHeader from './SectionHeader';
import ToolButton from '../../../storybook/stories'





storiesOf('SectionHeader', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .add('Title', () => (
        <SectionHeader>
            {/* <Text>Learn Malagasy </Text> */}
        </SectionHeader>
    ))
    .add('Home', () => (
        <SectionHeader>
            <ToolButton />
        </SectionHeader>
    ))
    .add('Learning', () => (
        <SectionHeader></SectionHeader>
    ))
