import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const finalizar=()=>{
    Alert.alert("Mensaje","SU SECION A FINALIZADO")
  }
  return (
    <View style={styles.container}>
      <Text>Ejemplo ejercicio Botones</Text>
      <StatusBar style="auto" />
      <Button
        title='INICIAR'
        onPress={()=>{
          Alert.alert("Mensaje","SU SECION A INICIADO")
        }}
      />
      <Button
        title='FIALIZAR'
        onPress={
          finalizar
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
