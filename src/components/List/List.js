import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import { Divider } from 'react-native-paper'
import ListItems from '../ListItems/ListItems'
import Categorie from '../../data/categories.json'


const styles = StyleSheet.create({
    liststyle: {
        marginLeft: 16,
        paddingTop: 16

    },

    container: {
        marginTop: 0,
    },

    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: "100%",
    },

    firstcontainer: {
        marginTop: 16,
        paddingTop: 16
    }



})

const Data = Categorie

const Separator = () => <View style={styles.separator} />



export default function Lists(props) {
    const [topic, setTopic] = useState(Data)

    useEffect(() => {
        setTopic(Data)
    }, []);

    return topic.categories.map((item) => {
        // const detail = Data.find((id) => item.id === id)
        // console.log(detail);
        return (
            <TouchableOpacity >
                <ListItems
                    style={styles.container}
                    key={item.id}
                    sections={Data}
                    ItemSeparatorComponent={() => <Separator></Separator>}>
                    <Text style={styles.liststyle}>{item.name.en}</Text>
                </ListItems>
                <Divider style={{ marginLeft: 16 }} />
            </TouchableOpacity>
        )
    })

}











