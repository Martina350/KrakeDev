import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export const CotenidoB = () => {
    return (
        <View style={styles.container}>
            <Text>CONTENIDO B</Text>
            <Text>Reto 31 funcionando por Jefferson Toaquiza Vilca</Text>
            <Button
                title='HOLA'
                ///funcion que no recibe parametros no retorna nada
             
            />
            <Button
                title='ADIOS'
                onPress={() => {
                    Alert.alert("Mensaje", "Adios desde el boton")
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});