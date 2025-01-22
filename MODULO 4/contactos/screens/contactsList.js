import { View,Text,StyleSheet,FlatList } from "react-native"
import {Button,ListItem,FAB} from "@rneui/base"
import {getAllContacts} from "../rest_client/contactos"
import { useState } from "react"

export const ContactsLists=({navigation})=>{
    const [contactList, setContactList]=useState([]);

    const ContactItem=({contact})=>{
        return <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.id}</ListItem.Title>
          <ListItem.Subtitle>{contact.nombre} {contact.apellido}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    }

    fnRefreshList=(contacts)=>{
        setContactList(contacts);
    }
    return <View style={styles.container}>
        <Text>LISTA DE CONTACTOS</Text>
        <Button
            title="Consultar"
            onPress={()=>{
            getAllContacts(fnRefreshList);
            }}
        />
        <FlatList
            data={contactList}
            renderItem={({item})=>{
                return <ContactItem contact={item}/>
            }}
        />
        <FAB
            title="+"
            onPress={()=>{navigation.navigate("ContactsFormNav")}}
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