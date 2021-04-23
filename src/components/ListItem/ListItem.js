import * as React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

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

export default function ListItem({ display }) {

    // arrowIcon = require('/src/assets/icons/Vectore.svg')

    return (
        <SafeAreaView>
            <TouchableOpacity>
                <View style={styles.element}

                >
                    <Text style={styles.topic}>
                        All
                    </Text>
                    <Text style={styles.learn}>
                        Learn
                        <Image
                        // source={arrowIcon}
                        />
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
