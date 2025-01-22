import { View,Text,StyleSheet,Alert } from "react-native"
import {Input,Button} from "@rneui/base"
import { useState } from "react"
import {saveLaptopRest} from "../rest_laptop/laptops"

export const LaptopsForm=()=>{
    const [brand, setBrand]=useState("");
    const [memory, setMemory]=useState("");
    const [disc, setDisc]=useState("");

    const showMessage=()=>{
        Alert.alert("CONFIRMACION","Laptop agregada exitosamente")
    }

    const saveLaptop=()=>{
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
            onPress={saveLaptop}
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