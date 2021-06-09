import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ListItem } from 'react-native'

import Vector from '../ImageIcon/Vector.svg'
import Categories from '../../data/categories.json'

const styles = StyleSheet.create({
    element: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingBottom: 16,
        marginLeft: 16,
        marginLeft: 16,
        justifyContent: 'space-between',

    },


    container: {
        marginStart: 16,
        marginEnd: 16
    },


    learn: {
        marginRight: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'right',
        color: '#06B6D4',

    },

    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },

    arrow: {
        height: 20,
        marginRight: 10,

    },

    learnlink: {
        flexDirection: 'row',
        marginTop: 16
    },

    icon: {
        marginTop: 2,
        marginRight: 16
    },



})


const functionToOpenNewPage = () => {
    return alert("Topic Detail")
}

// Should be singular as we return only one list item at a time 

export default function ListItems({ children }) { // onPress and the current text of the action button should be props, as they are subject to change. Also, we built the action button so it can be reused here. 

    return (

        <TouchableOpacity style={styles.element} onPress={functionToOpenNewPage}>
            {children}
            <View>
                <TouchableOpacity style={styles.learnlink} >
                    <Text style={styles.learn} > Learn </Text>
                    <Vector style={styles.icon} height={16} width={16} />
                </TouchableOpacity >
            </View>
        </TouchableOpacity >
    )
}




