import * as React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet, SectionList, ListItem } from 'react-native'

const styles = StyleSheet.create({
    element: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingBottom: 16,
        paddingTop: 16,
        justifyContent: 'space-between',



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
    }

})

const Separator = () => <View style={styles.separator} />

const Datas = [

    {
        title: "",
        data: ["All", "Food", "Greetings", "At the restaurant", "Unecessaraly loong cat", "Single words", "At the market"]
    },
]

const IconArrow = require('../ImageIcon/Vector.png')


const Item = ({ title }) => (
    <View style={styles.element}>
        <Text style={styles.topic}>{title}</Text>
        <View>
            <TouchableOpacity style={styles.learnlink}>
                <Text style={styles.learn}> learn </Text>

                <Image

                    style={styles.arrow}
                    source={IconArrow}
                />
            </TouchableOpacity >
        </View>

    </View>
);


export default function ListItems() {

    // arrowIcon = require('')


    return (
        <SafeAreaView >
            <SectionList

                sections={Datas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item style={styles.element} title={item} />}
                ItemSeparatorComponent={() => <Separator></Separator>}
            >

            </SectionList>
        </SafeAreaView>
    )
}




