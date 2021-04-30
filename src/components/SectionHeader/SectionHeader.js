import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToolButtonStories from '../../../storybook/storyLoader'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 0

    },
});


export default function SectionHeader({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}