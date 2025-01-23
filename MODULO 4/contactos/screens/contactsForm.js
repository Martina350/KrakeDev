import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveContactRest, updateContactRest, deleteContactRest } from "../rest_client/contactos"

export const ContactsForm = ({ navigation, route }) => {
    let contactRetrieved = route.params.contactParam
    let isNew = true;
    if (contactRetrieved != null) {
        isNew = false;
    }
    console.log("isNew", isNew);
    console.log("contactRetrieved", contactRetrieved);

    const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
    const [surname, setSurname] = useState(isNew ? null : contactRetrieved.apellido);
    const [phonenumber, setPhoneNumber] = useState(isNew ? null : contactRetrieved.celular);

    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message)
        navigation.goBack();
    }

    const createContact = () => {
        console.log("SAVE CONTACT");
        saveContactRest(
            {
                name: name,
                surname: surname,
                phoneNumber: phonenumber
            },
            showMessage
        );
    }
    const updateContact = () => {
        console.log("ACTUALIZANDO CONTACTO")
        updateContactRest({
            id: contactRetrieved.id,
            name: name,
            surname: surname,
            phoneNumber: phonenumber
        },
            showMessage);
    }

    const confirmDeleteContact = () => {
        Alert.alert("CONFIRMACION", "Esta seguro de eliminar el contacto?", [
            {
                text: 'SI',
                onPress: deleteContact
            },
            {
                text: 'CANCELAR',
            }
        ]);
    }


    const deleteContact = () => {
        deleteContactRest({
            id: contactRetrieved.id
        },showMessage);
    }

    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value) => {
                setName(value);
            }}
        />
        <Input
            value={surname}
            placeholder="APELLIDO"
            onChangeText={(value) => {
                setSurname(value);
            }}
        />
        <Input
            value={phonenumber}
            placeholder="# CELULAR"
            onChangeText={(value) => {
                setPhoneNumber(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew ? createContact : updateContact}
        />

        {
            isNew ? <View></View> : <Button
                style={styles.bStyle}
                title="ELIMINAR"
                onPress={confirmDeleteContact}
            />
        }

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bStyle: {
        marginTop: 20
    }
});