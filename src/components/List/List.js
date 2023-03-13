import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Button, FlatList, Text, View } from 'react-native'

export const List = ({ data, closeModal }) => {

  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={data.map(x => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.button}>
        <Button title='Cerrar' onPress={closeModal} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15
  },
  button: {
    paddingBottom: 15
  }
})
