import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {ContactsLists} from "./screens/contactsList"
import {ContactsForm} from "./screens/contactsForm"

export default function App() {
  const StackContacts=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="ContactsListNav">
        <StackContacts.Screen 
          name="ContactsListNav"
          component={ContactsLists}        
        />
        <StackContacts.Screen 
          name="ContactsFormNav"
          component={ContactsForm}        
        />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}

