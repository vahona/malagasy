import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    disabled: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#06B6D4',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 30,
        width: 90,
        height: 40,
        borderColor: '#06B6D4',
        borderWidth: 1,
        margin: 16

    },

    able: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(6, 182, 212, 1)',
        color: 'rgba(255, 255, 255, 1)',
        borderRadius: 30,
        width: 90,
        height: 40,
        margin: 16
    }
})

function NextAdd() {
    return alert('next')
}

function returnNull() {
    return null
}

export default function NextButton({ onPress, children, disable = true }) {
    return <TouchableHighlight
        onPress={disable ? returnNull : NextAdd}
        underlayColor="rgba(176,224,230, 0.25)"
        style={disable ? styles.disabled : styles.able}
    >{children}</TouchableHighlight>;
}

NextButton.defaultProps = {
    children: null,
    onPress: () => { },
};

NextButton.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
};
