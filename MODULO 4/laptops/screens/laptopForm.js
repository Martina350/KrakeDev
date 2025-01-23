import { View,Text,StyleSheet,Alert } from "react-native"
import {Input,Button} from "@rneui/base"
import { useState } from "react"
import {saveLaptopRest, uptdateLaptopRest} from "../rest_laptop/laptops"

export const LaptopsForm=({ navigation, route})=>{
    let laptopRetrieved = route.params.laptopParam
    let isNew = true;
    if (laptopRetrieved != null) {
        isNew = false;
    }
    console.log("isNew", isNew);
    console.log("laptopRetrieved", laptopRetrieved);

    const [brand, setBrand]=useState(isNew ? null : laptopRetrieved.marca);
    const [memory, setMemory]=useState(isNew ? null : laptopRetrieved.memoria);
    const [disc, setDisc]=useState(isNew ? null : laptopRetrieved.disco);

    const showMessage=()=>{
        Alert.alert("CONFIRMACION",isNew ? "Laptop agregada exitosamente": "Laptop actualizada")
        navigation.goBack();
    }

    const createLaptop=()=>{
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

    return <View style={styles.container}>
        <Input
            value={brand}
            placeholder="MARCA"
            onChangeText={(value)=>{
                setBrand(value);
            }}
        />
        <Input
            value={memory}
            placeholder="MEMORIA"
            onChangeText={(value)=>{
                setMemory(value);
            }}
        />
        <Input
            value={disc}
            placeholder="DISCO"
            onChangeText={(value)=>{
                setDisc(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew?createLaptop:updateLaptop}
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