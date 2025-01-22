import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {ContactsLists} from "./screens/contactsList"

export default function App() {
  const StackContacts=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen 
          name="ContactsListNav"
          component={ContactsLists}        
        />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}

