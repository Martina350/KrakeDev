import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}></View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor31}></View>
        <View style={styles.contenedor32}>
          <View style={styles.contenedor321}></View>
          <View style={styles.contenedor322}>
            <Button title='BOTON1'/>
            <Button title='BOTON2'/>
            <Button title='BOTON3'/>
          </View>
        </View>
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
  contenedor2:{
    flex:1,
    backgroundColor:"blue"
  },
  contenedor3:{
    flex:3,
    backgroundColor:"green"
  },
  contenedor31:{
    flex:1,
    backgroundColor:"red"
  },
  contenedor32:{
    flex:1,
    backgroundColor:"orange",
    flexDirection:"row",
  },
  contenedor321:{
    flex:1,
    backgroundColor:"white",
    flexDirection:"row",
  },
  contenedor322:{
    flex:2,
    backgroundColor:"black",
    flexDirection:"column",
    justifyContent:"space-around"
  }
});
