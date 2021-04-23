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



export default function ListItems({ sections, renderItem }) {

    // arrowIcon = require('')

    // ItemSeparatorComponent = { ItemSeparatorComponent }

    return (
        <SafeAreaView>
            <SectionList
                sections={sections}
                renderItem={renderItem}
            >

                {/* <View style={styles.element}>
                    <Text style={styles.topic}>
                        All
                    </Text>
                    <Text style={styles.learn}>
                        Learn
                        <Image
                        // source={require('../assets/icons/Vectore.svg')}
                        />
                    </Text>
                </View> */}
            </SectionList>
        </SafeAreaView>
    )
}
