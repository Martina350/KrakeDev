import { View,Text, StyleSheet, Button } from "react-native"

export const Products = ({navigation}) => {
    return <View style={styles.container}>
        <Text>ESTOY EN PRODUCTOS</Text>
        <Button
            title="IR A HOME"
            onPress={()=>{
                navigation.navigate('homeNav');
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      padding:20
    },
  });
  