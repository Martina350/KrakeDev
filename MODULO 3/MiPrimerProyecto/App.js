import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse=()=>{
    Alert.alert("Mensaje","Adiosito")
  }
  return (
    <View style={styles.container}>
      <Text>Reto 19 funcionando por Jefferson Toaquiza Vilca</Text>
      <StatusBar style="auto" />
      <Button
        title='HOLA'
        ///funcion que no recibe parametros no retorna nada
        onPress={()=>{
          Alert.alert("Mensaje","Hola desde el boton")
        }}
      />
       <Button
        title='ADIOS'
        onPress={
          despedirse
        }
      />
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
