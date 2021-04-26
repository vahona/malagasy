import * as React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet, SectionList, ListItem, Button } from 'react-native'

import Vector from '../ImageIcon/Vector.svg'

const styles = StyleSheet.create({
    element: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingBottom: 16,
        paddingTop: 16,
        justifyContent: 'space-between',

    },


    container: {
        marginStart: 16,
        marginEnd: 16
    },

    topic: {
        marginLeft: 18,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#111827'

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
    },

    icon: {
        marginTop: 2
    }

})

const Separator = () => <View style={styles.separator} />

const Datas = [

    {
        title: "",
        data: ["All", "Food", "Greetings", "At the restaurant", "Unecessaraly loong cat", "Single words", "At the market"]
    },
]


const Item = ({ title, onPress }) => (
    <View style={styles.element} onPress={onPress}>
        <Text style={styles.topic}>{title}</Text>
        <View>
            <TouchableOpacity style={styles.learnlink}  >
                <Text style={styles.learn} > learn </Text>

                <Vector style={styles.icon} height={16} width={16} fill='#000' />
            </TouchableOpacity >
        </View>

    </View>
);


export default function ListItems() {

    return (
        <SafeAreaView >
            <SectionList
                style={styles.container}
                sections={Datas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item style={styles.element} title={item} />}
                ItemSeparatorComponent={() => <Separator></Separator>}
            >

            </SectionList>
        </SafeAreaView>
    )
}




