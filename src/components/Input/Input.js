import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'


export const Input = ({ title, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,

  }
})