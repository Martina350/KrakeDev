import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopLists} from "./screens/laptopsList"

export default function App() {
  const StackLaptop=createNativeStackNavigator();
  return (
    <NavigationContainer>
          <StackLaptop.Navigator>
            <StackLaptop.Screen 
              name="LaptopListNav"
              component={LaptopLists}        
            />
          </StackLaptop.Navigator>
        </NavigationContainer>
  );
}
