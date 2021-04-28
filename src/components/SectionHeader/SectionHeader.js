import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';


const styles = StyleSheet.create({

});


export default function SectionHeader({ children }) {
    return (
        <SafeAreaView >
            {children}
        </SafeAreaView>
    );
}