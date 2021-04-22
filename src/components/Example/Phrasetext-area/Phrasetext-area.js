// components/Task.js
import React, {useState} from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, View } from 'react-native';
// import { styles } from '../constants/globalStyles';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        
        
    },

    container: {
      padding: 23
    },

    holder: {
       padding: 31
    }


})

export default function Phrasetest() {

  const [inputValue, setInputValue] = useState('roa ambin ny folo')

  function handleInput() {
    setInputValue()
  }

  // console.log(text);
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <TextInput
          placeholder={inputValue}
          style={[styles.input]}
        />
        </View>
    </SafeAreaView>
  );
}
