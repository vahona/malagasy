import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SectionList
} from 'react-native'

import ListItems from '../ListItems/ListItems'
import Categorie from '../../data/categories.json'

console.log(Categorie);

const styles = StyleSheet.create({
    liststyle: {
        marginLeft: 16
    },

    container: {
        marginTop: 0
    }


})

const Data = Categorie

const Separator = () => <View style={styles.separator} />



export default function Lists() {
    return Data.categories.map((item) => {
        console.log(item.name.en);
        return (
            <ListItems
                style={styles.container}
                key={item.id}
                sections={Data}
                ItemSeparatorComponent={() => <Separator></Separator>}>
                <Text style={styles.liststyle}>{item.name.en}</Text>
            </ListItems>
        )
    })

}











