import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [marcador1, setMarcador1] = useState('');
  const [marcador2, setMarcador2] = useState('');

  const usuario = "Pepe Perez";
  const equipo1 = "Equipo A";
  const equipo2 = "Equipo B";

  const guardarPronostico = async () => {
    if (!marcador1 || !marcador2) {
      Alert.alert("Error", "Por favor ingresa los marcadores para ambos equipos.");
      return;
    }

    try {
      const response = await fetch('http://192.168.100.14:8080/pronosticos-1.0.0/rest/pronostico/ingresar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuarioId: 3, 
          partidoId: 2, 
          golesLocal: parseInt(marcador1),
          golesVisitante: parseInt(marcador2),
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Pronóstico guardado correctamente.");
        setMarcador1('');
        setMarcador2('');
      } else {
        Alert.alert("Error", "No se pudo guardar el pronóstico.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Hubo un problema al conectarse al servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Pronóstico Deportivo</Text>
      <Text style={styles.label}>Usuario: {usuario}</Text>
      <Text style={styles.label}>Equipo 1: {equipo1}</Text>
      <TextInput
        style={styles.input}
        placeholder="Marcador Equipo 1"
        keyboardType="numeric"
        value={marcador1}
        onChangeText={setMarcador1}
      />
      <Text style={styles.label}>Equipo 2: {equipo2}</Text>
      <TextInput
        style={styles.input}
        placeholder="Marcador Equipo 2"
        keyboardType="numeric"
        value={marcador2}
        onChangeText={setMarcador2}
      />
      <Button title="Guardar Pronóstico" onPress={guardarPronostico} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});