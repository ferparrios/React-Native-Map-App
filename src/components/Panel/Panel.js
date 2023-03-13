import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export const Panel = ({ onPressLeft, textLeft, togglePointFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title='Mostrar/Ocultar' onPress={togglePointFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})
