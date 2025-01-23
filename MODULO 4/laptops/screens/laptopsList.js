import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { useState, useEffect } from "react"
import { getAllLaptops } from "../rest_laptop/laptops"

export const LaptopLists = ({ navigation }) => {
    const [laptopList, setLaptopList] = useState([]);

    useEffect(() => { getAllLaptops(fnRefreshList); }, []);

    const LaptopItem = ({ laptop }) => {
        return <TouchableHighlight onPress={() => {
            navigation.navigate("LaptopFormNav", { laptopParam: laptop })
        }}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{laptop.id}</ListItem.Title>
                    <ListItem.Subtitle>{laptop.marca} {laptop.memoria}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    }

    fnRefreshList = (laptops) => {
        setLaptopList(laptops);
    }

    return <View style={styles.container}>
        <Text style={styles.title}>LISTA DE LAPTOPS</Text>
        <FlatList
            data={laptopList}
            renderItem={({ item }) => {
                return <LaptopItem laptop={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("LaptopFormNav", {}) }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30
    }
});