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
        marginTop: 35,
        color: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row'


    }
});

function Switchalert() { // See action button about onPress prop and use of children
    return alert("switched the langue")
}

export default function LanguageSwitcherButton({ children }) {
    return (
        <TouchableOpacity style={styles.container} onPress={Switchalert}>
            {children}
        </TouchableOpacity>
    );
}