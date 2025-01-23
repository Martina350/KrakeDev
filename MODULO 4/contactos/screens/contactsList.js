import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllContacts } from "../rest_client/contactos"
import { useState, useEffect } from "react"

export const ContactsLists = ({ navigation }) => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => { getAllContacts(fnRefreshList); }, []);

  const ContactItem = ({ contact }) => {
    return <TouchableHighlight onPress={() => {
      navigation.navigate("ContactsFormNav", { contactParam: contact });
    }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.id}</ListItem.Title>
          <ListItem.Subtitle>{contact.nombre} {contact.apellido}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableHighlight>
  }

  fnRefreshList = (contacts) => {
    setContactList(contacts);
  }
  return <View style={styles.container}>
    <FlatList
      data={contactList}
      renderItem={({ item }) => {
        return <ContactItem contact={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("ContactsFormNav", {}) }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});