import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest, uptdateLaptopRest, deleteLaptopRest } from "../rest_laptop/laptops"

export const LaptopsForm = ({ navigation, route }) => {
    let laptopRetrieved = route.params.laptopParam
    let isNew = true;
    if (laptopRetrieved != null) {
        isNew = false;
    }
    console.log("isNew", isNew);
    console.log("laptopRetrieved", laptopRetrieved);

    const [brand, setBrand] = useState(isNew ? null : laptopRetrieved.marca);
    const [memory, setMemory] = useState(isNew ? null : laptopRetrieved.memoria);
    const [disc, setDisc] = useState(isNew ? null : laptopRetrieved.disco);

    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message)
        navigation.goBack();
    }

    const createLaptop = () => {
        console.log("SAVE CONTACT");
        saveLaptopRest(
            {
                brand: brand,
                memory: memory,
                disc: disc
            },
            showMessage
        );
    }

    const updateLaptop = () => {
        console.log("ACTUALIZANDO LAPTOP")
        uptdateLaptopRest({
            id: laptopRetrieved.id,
            brand: brand,
            memory: memory,
            disc: disc
        },
            showMessage);
    }
    const confirmDeleteLaptop = () => {
        Alert.alert("CONFIRMACION", "Esta seguro de eliminar el registro?", [
            {
                text: 'SI',
                onPress: deleteLaptop
            },
            {
                text: 'CANCELAR',
            }
        ]);
    }


    const deleteLaptop = () => {
        deleteLaptopRest({
            id: laptopRetrieved.id
        }, showMessage);
    }
    return <View style={styles.container}>
        <Input
            value={brand}
            placeholder="MARCA"
            onChangeText={(value) => {
                setBrand(value);
            }}
        />
        <Input
            value={memory}
            placeholder="MEMORIA"
            onChangeText={(value) => {
                setMemory(value);
            }}
        />
        <Input
            value={disc}
            placeholder="DISCO"
            onChangeText={(value) => {
                setDisc(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew ? createLaptop : updateLaptop}
        />

        {
            isNew ? <View></View> : <Button
                style={styles.bStyle}
                title="ELIMINAR"
                onPress={confirmDeleteLaptop}
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