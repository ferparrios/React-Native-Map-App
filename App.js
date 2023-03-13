
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Map, ModalView, Panel, Input, List } from './src/components';



export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [showFilter, setShowFilter] = useState('new_punto')
  const [pointsFilter, setPointsFilter] = useState(true)

  const handleLongPress = ({ nativeEvent }) => {
    setShowFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)

  }

  const handleChangeText = (text) => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = {
      coordinate: puntoTemp,
      name: nombre
    }
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleList = () => {
    setShowFilter('all_puntos')
    setVisibility(true)
  }

  const togglePointFilter = () => {
    setPointsFilter(!pointsFilter)
  }

  

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleList} textLeft='Lista' togglePointFilter={togglePointFilter} />
      <ModalView visibility={visibility}>
        {
          showFilter === 'new_punto' ? (
            <View style={styles.form}>
              <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
              <Button title='Aceptar' onPress={handleSubmit} />
            </View>
          ) : (
            <List data={puntos} closeModal={() => setVisibility(false)}/>
          )
        }
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start ',
  },
  form: {
    padding: 20
  }
});
