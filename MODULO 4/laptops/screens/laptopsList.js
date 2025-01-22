import { View,Text,StyleSheet,FlatList } from "react-native"
import {Button,ListItem} from "@rneui/base"
import { useState } from "react"
import {getAllLaptops} from "../rest_laptop/laptops"

export const LaptopLists=()=>{
    const [laptopList, setLaptopList]=useState([]);
    
        const LaptopItem=({laptop})=>{
            return <ListItem>
            <ListItem.Content>
              <ListItem.Title>{laptop.id}</ListItem.Title>
              <ListItem.Subtitle>{laptop.marca} {laptop.memoria}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        }
    
        fnRefreshList=(laptops)=>{
            setLaptopList(laptops);
        }
    
    return <View>
        <Text style={styles.title}>LISTA DE LAPTOPS</Text>
        <Button
            title="Consultar"
            onPress={()=>{
            getAllLaptops(fnRefreshList);
            }}
        />
        <FlatList
            data={laptopList}
            renderItem={({item})=>{
            return <LaptopItem laptop={item}/>
            }}
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30
    }
  });