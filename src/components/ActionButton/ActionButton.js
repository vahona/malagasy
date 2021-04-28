import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 10
    }
})

export default function ActionButton({ onPress, children }) {
    return <TouchableHighlight onPress={onPress} underlayColor="rgba(176,224,230, 0.25)">{children}</TouchableHighlight>;
}


