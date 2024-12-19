import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numero1,setNumero1]=useState();
  const [numero2,setNumero2]=useState();
  const [result,setResult]=useState();

  return (
    <View style={styles.container}>
      <Text>Calculadora Ejercicio</Text>
      <Text></Text>
      <Text>Ingrese un numero</Text>
      <TextInput
        style={styles.cajaTexto}
        value={numero1}
        onChangeText={(num1)=>{
          let valorFlotante1=parseFloat(num1);
          setNumero1(valorFlotante1);
        }}
      />
      <Text></Text>
      <Text>Ingrese un numero</Text>
      <TextInput
        style={styles.cajaTexto}
        value={numero2}
        onChangeText={(num2)=>{
          let valorFlotante=parseFloat(num2);
          setNumero2(valorFlotante);
        }}
      />
      <Text></Text>
      <StatusBar style="auto" />
      <Button
        title='SUMAR'
        onPress={()=>{
          let suma=numero1+numero2;
          setResult(suma)
        }}
      />
      <Button
        title='RESTA'
        onPress={()=>{
          let resta=numero1-numero2;
          setResult(resta)
        }}
      />
      <Button
        title='MULTIPLICA'
        onPress={()=>{
          let mult=numero1*numero2;
          setResult(mult)
        }}
      />  
      <Button
        title='DIVIDE'
        onPress={()=>{
          let div=numero1/numero2;
          setResult(div)
        }}
      />             
    <Text></Text>
    <Text>Resultado: {result}</Text>
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
