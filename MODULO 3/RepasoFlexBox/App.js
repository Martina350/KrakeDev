import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vista1}>
        <Button style={styles.botones} title='X'/>
        <Button style={styles.botones} title='Y'/>
        <Button style={styles.botones} title='Z'/>
      </View>
      <View style={styles.vista2}>
        <View style={styles.vista21}>
          <View style={styles.vista211}>
          <Button title='BOTON 1'/>
          <Button title='BOTON 2'/>
          </View>
          <View style={styles.vista212}>
          <Button title='OPERACION 1'/>
          <Button title='OPERACION 2'/>
          <Button title='OPERACION 3'/>              
          </View>
        </View>
        <View style={styles.vista22}>
          <Button title='ACCION 1'/>
          <Button title='ACCION 2'/>
        </View>
      </View>
      <View style={styles.vista3}>
        <Button title='BOTON FINAL'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"grey",
    flexDirection:"column",
  },
  vista1:{
    flex:1,
    backgroundColor:"yellow",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    padding:0.1
  },
  vista2:{
    flex:6,
    backgroundColor:"blue",
    flexDirection:"column",
  },
  vista21:{
    flex:4,
    backgroundColor:"green",
    flexDirection:"row",
  },
  vista211:{
    flex:1,
    backgroundColor:"black",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"stretch"
  },
  vista212:{
    flex:1,
    backgroundColor:"white",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start"
  },
  vista22:{
    flex:1,
    backgroundColor:"orange",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    padding:0.1
  },
  vista3:{
    flex:1,
    backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    padding:0.1
  }
});
