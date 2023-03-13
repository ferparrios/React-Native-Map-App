import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native';

export const ModalView = ({children, visibility}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
    >
      <View style={styles.modal}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    minWidth: Dimensions.get('window').width - 100,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },


});
