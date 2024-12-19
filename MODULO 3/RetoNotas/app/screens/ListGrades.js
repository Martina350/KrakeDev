import { View, Text, StyleSheet, FlatList, TouchableHighlight} from "react-native"
import { getGrades } from '../services/GradesServices'
import { Avatar, FAB, ListItem } from '@rneui/base'
import { useState } from "react"

export const ListGrades = ({ navigation }) => {
  const [time, setTime] = useState();

  const refresh = () => {
    setTime(new Date().getTime());
    console.log('Horas editada')
  }

  const ItemGrade = ({ nota }) => {
    return <TouchableHighlight onPress={() => {
      navigation.navigate('GradeFormsNav', { notita: nota, fnrefrescar: refresh });
    }}>
      <ListItem buttomDivider>
        <Avatar
          title={nota.subject.substring(0, 1)}
          containerStyle={{ backgroundColor: 'red' }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>
            {nota.subject}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle>
            {nota.calificacion}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>
    </TouchableHighlight>
  }

  return <View style={styles.container}>
    <FlatList
      data={getGrades()}
      renderItem={({ item }) => {
        return <ItemGrade nota={item} />
      }}
      keyExtractor={(item) => { return item.subject}}
      extraData={time}
    />
    <FAB
      title='+'
      placement='right'
      onPress={() => {
        navigation.navigate('GradeFormsNav', { notita: null, fnrefrescar: refresh })
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
