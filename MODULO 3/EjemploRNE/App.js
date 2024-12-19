import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Button
        title='OK'
        icon={{
          name: 'pluscircle',
          type: 'antdesign',
          size: 30,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert('Info','QUE MAS VE '+name)
        }}
      />
      <Button
        title='Cancel'
        icon={<Icon
          name='pluscircle'
          type='antdesign'
          color='red'
        />}
      />
      <Icon
        name='pluscircle'
        type='antdesign'
        color='black'
      />
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese el nombre'
        label='nombre'
      />
      <Text>{name}</Text>
      <StatusBar style="auto" />
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
