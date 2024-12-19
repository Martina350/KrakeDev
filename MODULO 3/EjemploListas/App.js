import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: 'Jefferson', apellido: 'Toaquiza', cedula: '0504497785' },
  { nombre: 'Adriana', apellido: 'Tuquerrez', cedula: '0504497786' },
  { nombre: 'Luis', apellido: 'Gonzales', cedula: '0504497787' },
]

//Esta variable verifica si se esta creando o modifiando la persona
let esNuevo = true;
//Esata variable almacena el indice del arreglo
let indiceSeleccionado = -1;
export default function App() {
  const [txtCeduda, setTxtcedula] = useState();
  const [txtNombre, setTxtnombre] = useState();
  const [txtApellido, setTxtapellido] = useState();
  const [numElementos, setNumelementos] = useState(personas.length);

  let ItemPersona = ({indice,persona}) => {
    return <View style={styles.itemPersona}>
      <View style={styles.itemIndice}>
        <Text style={styles.textoPrincipal}>{indice}</Text>
      </View>
      <View style={styles.itemContenido}>
        <Text style={styles.textoPrincipal}>{persona.nombre} - {persona.apellido}</Text>
        <Text style={styles.textoSecundario}>{persona.cedula}</Text>
      </View>
      <View style={styles.itemBotones}>
        <Button
          title=' E '
          color='#7cfc00'
          onPress={() => {
            setTxtcedula(persona.cedula);
            setTxtnombre(persona.nombre);
            setTxtapellido(persona.apellido)
            esNuevo = false;
            indiceSeleccionado = indice
          }}
        />
        <Button
          title=' X '
          color='#ff0000'
          onPress={() => {
            indiceSeleccionado = indice
            personas.splice(indiceSeleccionado, 1)
            setNumelementos(personas.length)
          }}
        />
      </View>
    </View>
  }

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCeduda) {
        return true
      }
    }
    return false
  }

  let limpiar = () => {
    setTxtnombre(null);
    setTxtapellido(null);
    setTxtcedula(null);
    esNuevo = true;
  }
  let agregarPersonas = () => {
    if (esNuevo) {
      // if (txtNombre == '' & txtCeduda == '' & txtApellido == '') {
      //   Alert.alert('Info', 'Ingrese todos los datos')
      // }else{
      //   let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCeduda }
      //   personas.push(persona);
      // }
      if (existePersona()) {
        Alert.alert('INFO', 'ya existe una persona con la cedula ' + txtCeduda)
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCeduda }
        personas.push(persona);
      }
    } else {
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    limpiar();
    setNumelementos(personas.length)
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput style={styles.txt}
          value={txtCeduda}
          placeholder='Ingrese su cedula'
          onChangeText={setTxtcedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtnombre}
        />
        <TextInput style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtapellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              agregarPersonas();
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Registros: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({index,item}) => {
            return <ItemPersona indice={index} persona={item} />
          }}
          keyExtractor={(item) => {
            return item.cedula
          }}
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.areaPie}>
        <Text>Autor: Jefferson Toaquiza</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f8ff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    // backgroundColor:'#7fffd4',
    padding: 10
  },
  itemPersona: {
    backgroundColor: '#fff8dc',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoPrincipal: {
    fontSize: 20
  },
  textoSecundario: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  areaCabecera: {
    flex: 4,
    // backgroundColor: '#f0e68c',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 1
  },
  areaContenido: {
    flex: 4,
    // backgroundColor: '#32cd32'
  },
  areaPie: {
    flex: 0.5,
    // backgroundColor: '#ffa07a',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 1
  },
  itemIndice: {
    // backgroundColor: '#ffff00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.1
  },
  itemContenido: {
    // backgroundColor: '#40e0d0',
    flex: 5,
  },
  itemBotones: {
    flexDirection: 'row',
    // backgroundColor: '#40e0d0',
    flex: 2,
    alignContent: 'center',
    justifyContent: 'space-around',
    margin: 1,
  },
  txt: {
    borderWidth: 1,
    borderColor: '#708090'
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

});
