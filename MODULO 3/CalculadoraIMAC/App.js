import { StatusBar } from 'expo-status-bar';
import { Image, Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[altura,setAltura]=useState();
  const[peso,setPeso]=useState();
  const[resultado,setResultado]=useState();
  const[result2,setResult2]=useState()

  const mostrar=()=>{
    let alturacm=altura/100;
    let imc=peso/(alturacm*alturacm);
    setResultado(imc);
        if(resultado<18.5){
          setResult2(' >>> Peso inferior al normal')
          // Alert.alert("RESULTADO","Su peso es inferior al normal")
        }if(resultado>=18.5 && resultado<25){
          setResult2(' >>> Peso normal')
          // Alert.alert("RESULTADO","Su peso es normal")
        }if(resultado>=25 && resultado<30){
          setResult2(' >>> Peso superior al normal')
          // Alert.alert("RESULTADO","Su peso es superior al normal")
        }if(resultado>30){
          setResult2(' >>> Obesidad')
          // Alert.alert(" >>> RESULTADO","Usted tiene obesidad")
        } 
  }  
  return (
    <View style={styles.container}>
      <View style={styles.contenedor1}>
      <Text style={styles.titulosMayuscula}>CALCULADORA INDICE DE MASA CORPORAL</Text>
      <Text style={styles.textos}>Sistema Metrico</Text>
      <Text style={styles.titulosMayuscula}>ESTATURA</Text>
      <Text style={styles.textos}>En centimetros</Text>
      <TextInput
        style={styles.cajasTexto}
        placeholder='Ingrese su estatura'
        value={altura}
        onChangeText={(alt)=>{
          let alturaNumero=parseInt(alt);
          setAltura(alturaNumero);
        }}        
      />
      <Text style={styles.titulosMayuscula}>PESO</Text>
      <Text style={styles.textos}>En kilogramos</Text>
      <TextInput
        style={styles.cajasTexto}
        placeholder='Ingrese su peso'
        value={peso}
        onChangeText={(pes)=>{
          let pesoNumero=parseFloat(pes);
          setPeso(pesoNumero);
        }}         
      />
      <Button
      title='CALCULAR'
      onPress={mostrar}
      />
      <View style={styles.contenedor3}>
        <Image style={styles.imagen}
        source={require('./assets/IMC.png')}/>
      </View>
      </View>
      <View style={styles.contenedor2}>
      <Text>Resultado:</Text>
      <Text style={styles.cajasTexto2}>{resultado }{result2}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contenedor1:{
    flex:3,
    backgroundColor: 'white',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:70,
  },
  contenedor2:{
    flex:0.5,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  contenedor3:{
    flex:1,
    backgroundColor: 'white',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  cajasTexto:{
    borderBlockColor:'gray',
    borderWidth:1,
    paddingHorizontal:20,
    marginBottom:20,
    marginTop:20,
  },
  cajasTexto2:{
    borderBlockColor:'gray',
    borderWidth:1,
    paddingHorizontal:2,
    marginHorizontal:4,
    width:300
  },
  textos:{
    marginBottom:10,
    marginTop:10,
  },
  titulosMayuscula:{
    fontSize:16,
    marginBottom:10,
    fontWeight:"bold"
  },
  imagen:{
    width:380,
    height:210,
    resizeMode:'stretch',
    borderRadius:10,
    marginTop:20,
    margin:20
  }
});
