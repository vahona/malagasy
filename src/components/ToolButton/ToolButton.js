import * as React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(6, 182, 212, 1)',
        borderRadius: 100,
        marginTop: 35,
        marginLeft: 10,
        marginRight: 10
    }
});




function Toolalert() {
    return alert("what's going next")
}

export default function ToolButton({ children }) {

    return (
        <TouchableOpacity style={styles.container} onPress={Toolalert}>
            {children}
        </TouchableOpacity>
    );
}