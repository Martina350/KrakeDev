import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nomeda,setMoneda]=useState();
  const [resultado,setResultado]=useState();
  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR</Text>
      <Text></Text>
      <Text>INGRESE LA CANTIDAD A CONVERTIR</Text>
      <Text></Text>
      <TextInput
          style={styles.cajaTexto}
          value={nomeda}
          onChangeText={(txtmoneda)=>{
            let valorFlotante=parseFloat(txtmoneda);
            setMoneda(valorFlotante);
          }}          
      />
      <Text></Text>
      <Button
      title='CONVERTIR A PESOS MEXICANOS'
      onPress={()=>{
        let pesosMex=nomeda*20.29;
        setResultado(pesosMex)
      }}
      />
      <Text></Text>
      <Button
      title='CONVERTIR A PESOS COLOMBIANOS'
      onPress={()=>{
        let pesosCol=nomeda*4402.87;
        setResultado(pesosCol)
      }}
      />
      <Text></Text>
      <Button
      title='CONVERTIR A EUROS'
      onPress={()=>{
        let euro=nomeda*0.95;
        setResultado(euro)
      }}
      />      
      <Text></Text> 
      <Text>RESULTADO: {resultado}</Text>
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
