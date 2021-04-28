import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 40,
        backgroundColor: 'rgba(6, 182, 212, 1)',
        borderRadius: 30,
        margin: 16,
        color: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row'


    }
});

function Switchalert() {
    return alert("swicht the langue")
}

export default function LanguageSwitcherButton({ children }) {
    return (
        <TouchableOpacity style={styles.container} onPress={Switchalert}>
            {children}
        </TouchableOpacity>
    );
}