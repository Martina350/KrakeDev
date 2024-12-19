import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre,setNombre]=useState();
  const[apellido,setApellido]=useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMMPLO MARGIN</Text>
      <TextInput
      style={styles.caja}
      value={nombre}
      onChangeText={setNombre}
      placeholder='Ingrese su nombre'
      />
      <TextInput
      style={styles.caja}
      value={apellido}
      onChangeText={setApellido}
      placeholder='Ingrese su apellido'
      />
      <Button
      title='OK'
      />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",//EJE PRINCIPAL (verticar)
    justifyContent:"center",//vertical
    alignItems:'stretch',//horizontal
    paddingHorizontal:10
  },
  caja:{
    borderBlockColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:20,
    marginBottom:10
  },
  titulo:{
    fontSize:16,
    marginBottom:10,
    fontWeight:"bold"

  }
});
