import { View, Text, StyleSheet, Button } from "react-native"

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <View>
            <Text>HOME</Text>
        </View>
        <View style={styles.botones}>
            <Button
                title="CONTACTOS"
                onPress={() => {
                    navigation.navigate('contacNav');
                }}
            />
            <Button
                title="PRODUCTOS"
                onPress={() => {
                    navigation.navigate('productNav');
                }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones:{
        flex1:1,
        // backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        margin:10,
        padding:10,
        width:300,
    }
});
