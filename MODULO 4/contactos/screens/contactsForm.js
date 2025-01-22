import { View,Text,StyleSheet,Alert } from "react-native"
import {Input,Button} from "@rneui/base"
import { useState } from "react"
import {saveContactRest} from "../rest_client/contactos"

export const ContactsForm=()=>{
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [phonenumber,setPhoneNumber]=useState("");

    const showMessage=()=>{
        Alert.alert("CONFIRMACION","Contacto creado exitosamente")
    }

    const saveContact=()=>{
        console.log("SAVE CONTACT");
        saveContactRest(
            {
                name:name,
                surname:surname,
                phoneNumber:phonenumber
            },
            showMessage
        );
    }

    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value)=>{
                setName(value);
            }}
        />
        <Input
            value={surname}
            placeholder="APELLIDO"
            onChangeText={(value)=>{
                setSurname(value);
            }}
        />
        <Input
            value={phonenumber}
            placeholder="# CELULAR"
            onChangeText={(value)=>{
                setPhoneNumber(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={saveContact}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
  });