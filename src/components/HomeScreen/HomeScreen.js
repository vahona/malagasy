// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import SectionHeader from '../SectionHeader/SectionHeader'
import ToolButton from '../ToolButton/ToolButton'

import Croi from '../ImageIcon/Croi.svg'
import Doubleticked from '../ImageIcon/Doubleticked'
import Home from '../ImageIcon/Home.svg'
import Inferieur from '../ImageIcon/Inferieur.svg'
import Whiteticked from '../ImageIcon/Whiteticked.svg'

import SwitchIcon from '../ImageIcon/SwitchIcon.svg'
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton'
import List from '../List/List'
import ListItems from '../ListItems/ListItems'

const styles = StyleSheet.create({

    english: {
        color: 'rgba(255, 255, 255, 1)',
        marginRight: 5.93
    },

    malagasy: {
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 5.93
    },

    select: {
        marginTop: 56,
        marginBottom: 15,
        marginLeft: 23,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 21.78
    },

    numberofword: {
        marginLeft: 23,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 21.78,
        marginBottom: 15,
        marginTop: 15
    },

    head: {
        marginLeft: 7
    },

    list: {
        marginLeft: 7,
        marginRight: 23,
        height: 371
    },

    containerword: {
        marginRight: 23
    },

    text: {
        marginLeft: 16,
        marginTop: 16
    }



})

export default function HomeScreen() {


    return (
        <SafeAreaView >
            <View style={styles.head}>
                <SectionHeader >

                    <ToolButton>
                        <Croi />
                    </ToolButton>
                    <LanguageSwitcherButton>
                        <Text style={styles.english}>EN</Text>
                        <SwitchIcon />
                        <Text style={styles.malagasy}>MA</Text>
                    </LanguageSwitcherButton >
                    <ToolButton>
                        <Whiteticked />
                    </ToolButton>
                    <ToolButton>
                        <Doubleticked />
                    </ToolButton>
                    <ToolButton>
                        <Home />
                    </ToolButton>
                </SectionHeader>
            </View>
            <Text style={styles.select}>Select a categories</Text>
            <View style={styles.list}>
                <ScrollView>
                    <List> </List>
                </ScrollView>
            </View>
            <ScrollView>
                <Text style={styles.numberofword}>Seen phrases</Text>
                <View style={styles.containerword}>
                    <ListItems><Text style={styles.text}>Words and phrases</Text></ListItems>
                </View>
                <Text style={styles.numberofword}>Learnt Phrases</Text>
                <View style={styles.containerword}>
                    <ListItems><Text style={styles.text}>Words and phrases</Text></ListItems>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}