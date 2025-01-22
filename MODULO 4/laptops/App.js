import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopLists} from "./screens/laptopsList"
import {LaptopsForm} from "./screens/laptopForm"

export default function App() {
  const StackLaptop=createNativeStackNavigator();
  return (
    <NavigationContainer>
          <StackLaptop.Navigator initialRouteName="LaptopListNav">
            <StackLaptop.Screen 
              name="LaptopListNav"
              component={LaptopLists}        
            />
            <StackLaptop.Screen 
              name="LaptopFormNav"
              component={LaptopsForm}        
            />
          </StackLaptop.Navigator>
        </NavigationContainer>
  );
}
