import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'


export const Map = ({ onLongPress, puntos, pointsFilter }) => {
  return (
    <MapView
      style={styles.map}
      onLongPress={onLongPress}
    >
      {
        pointsFilter && puntos.map(x => (
          <Marker
            key={x.name}
            coordinate={x.coordinate}
            title={x.name}
          />
        ))
      }
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width
  },
})
