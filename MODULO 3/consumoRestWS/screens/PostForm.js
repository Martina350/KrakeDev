import { View, StyleSheet, Alert} from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import {createDocumentTypes} from '../services/TestServices'
export const PostForm = () => {
    const [codigo,setCodigo]=useState();
    const [descripcion,setDescripcion]=useState();

    const createDocTypes=()=>{
        console.log("creando TIPO DE DOCUMENTO: "+codigo+" "+descripcion);
        createDocumentTypes(
            {
                title:codigo,
                body:descripcion
            },
            ()=>{
                Alert.alert("CONFIRMACION","Se ha ingresado un nuevo TIPO DE DOCUMENTO")
            }
        );
    }
    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">NUEVO TIPO DE DOCUMENTO</Text>
        </View>
        <View style={styles.formContainer}>            
            <Input
                placeholder='CODIGO'
                value={codigo}
                onChangeText={(value)=>{
                    setCodigo(value);
                }}
            />
            <Input
                placeholder='DESCRIPCION'
                value={descripcion}
                onChangeText={(value)=>{
                    setDescripcion(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={createDocTypes}
            />
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection:'column',
        justifyContent:'center'

    }
});
