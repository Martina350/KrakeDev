import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  // const arreglo=useState(0);
  // const contadorEstado=arreglo[0];
  // const setContadorEstado=arreglo[1];
  const [contadorEstado,setContadorEstado]=useState(0);
  const [vidasEstado,setVidasEstado]=useState(5);

  // let contador=0;
  const incrementar=()=>{
    // contador=contador+1
    // console.log("Contador>>>"+contador)
    setContadorEstado(contadorEstado+1);
    // console.log("Contador Estado>>>"+contadorEstado)
  }
  const decrementar=()=>{
    setContadorEstado(contadorEstado-1)
  }
  const perderVid=()=>{
    setVidasEstado(vidasEstado-1);
    if(vidasEstado<1){
      Alert.alert("ADVERTENCIA","GAME OVER")
      setVidasEstado(vidasEstado)
  }
  const ganarVid=()=>{
    setVidasEstado(vidasEstado+3);
  }
  return (
    <View style={styles.container}>
      <Text>Variables de Estado </Text>
      {/* <Text>Contador: {contador}</Text> */}
      <Text>Contador Estado: {contadorEstado}</Text>
      <Text>vidas: {vidasEstado}</Text>
      <Button
        title='INCREMENTAR'
        onPress={incrementar}
      />
      <Button
        title='DECREMENTAR'
        onPress={decrementar}
      />
      <Button
        title='PERDER VIDA'
        onPress={perderVid}
      />
      <Button
        title='PREMIAR'
        onPress={ganarVid}
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
});
