import * as React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet, SectionList, ListItem } from 'react-native'

const styles = StyleSheet.create({
    element: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    topic: {
        marginLeft: 18,

    },

    learn: {
        marginRight: 20
    }


})

const Datas = [

    {
        title: "",
        data: ["All", "Food", "Greetings", "At the restaurant", "Unecessaraly loong cat", "Single words", "At the market"]
    },
]


const Item = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);


export default function ListItems() {

    // arrowIcon = require('')


    return (
        <SafeAreaView>
            <SectionList
                sections={Datas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}

                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            >
            </SectionList>
        </SafeAreaView>
    )
}




