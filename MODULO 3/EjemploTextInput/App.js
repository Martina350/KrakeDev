import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  // let nombre ="Ingrese su nombre"
  const[nombre,setNombre]=useState("Ingrese su nombre");
  const[apellido,setApellido]=useState("Ingrese su apellido");
  const [nomcomp,setNomcomp]=useState();
  return (
    <View style={styles.container}>
      <Text>Ejemplo Text Inpunt dr</Text>
      <Text>Hola {nomcomp}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={nombre}
        onChangeText={(txt)=>{
          // console.log("VALOR>>> "+txt)
          setNombre(txt);
        }}
      />
      <TextInput
        style={styles.cajaTexto}
        value={apellido}
        onChangeText={(txtap)=>{
          setApellido(txtap);
        }}
      />
      <Button
        title='SALUDAR'
        onPress={()=>{
          let completo =nombre+" "+apellido;
          setNomcomp(completo);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto: {
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
  }
});
