import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 10
    }
})

export default function ActionButton({ onPress, children }) { // I'd recommend naming children something like Icon so it is easy to recognise what is does
    // In its current state, the compoment in merely a wrapper around its children. I know we said controlled components are desirable but this goes to far. In the current way, everything like styling and children components is handled outside of the component, which clutters the parent scope and makes it hard to reuse/ change because you have to think about code in many different places
    return <TouchableHighlight onPress={onPress} underlayColor="rgba(176,224,230, 0.25)">{children}</TouchableHighlight>;
}


