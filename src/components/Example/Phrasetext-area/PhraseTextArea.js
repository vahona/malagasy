// components/Task.js
import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, View } from 'react-native';
// import { styles } from '../constants/globalStyles';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingTop: 41,
    paddingBottom: 41,
    color: '#111827',
    fontSize: 20,
    lineHeight: 24,
    borderRadius: 3,



  },

  container: {
    padding: 23
  },

  holder: {
    padding: 31
  }


})

export default function PhraseTextArea({ editable, placeholder, inputValue, onChange, multiline }) {

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={inputValue}
          style={[styles.input]}
          editable={editable}
          onChange={onChange}
          multiline={multiline}
        />
      </View>
      <Text>
      </Text>
    </SafeAreaView>
  );
}
