import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'

import ListItems from '../ListItems/ListItems'
import Categorie from '../../data/categories.json'

console.log(Categorie);

const styles = StyleSheet.create({})

const Data = Categorie

// const Categorie = require('../../data/categories.json')

const Separator = () => <View style={styles.separator} />


export default function Lists() {
    return Data.categories.map((item) => {
        return (
            <ListItems key={item.id}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Text>{item.en}</Text>}>

                </FlatList>

                {/* <Text> {item.mg}</Text> */}
                {/* <SectionList ItemSeparatorComponent={() => <Separator></Separator>}>
                    {item.mg}
                </SectionList> */}

                {/* <Text>{item.mg}</Text> */}

            </ListItems>
        )
    })

}




