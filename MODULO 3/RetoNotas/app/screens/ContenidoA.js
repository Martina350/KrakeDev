import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export const CotenidoA = () => {
    return (
        <View style={styles.container}>
            <Text>CONTENIDO A</Text>
            <Text>Reto 31 funcionando por Jefferson Toaquiza Vilca</Text>
            <Button
                title='HOLA'
                ///funcion que no recibe parametros no retorna nada
                onPress={() => {
                    Alert.alert("Mensaje", "Hola desde el boton")
                }}
            />
            <Button
                title='ADIOS'
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
