import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GradeForms } from './app/screens/GradeForm'
import { ListGrades } from './app/screens/ListGrades'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CotenidoA } from './app/screens/ContenidoA'
import { CotenidoB } from './app/screens/ContenidoB'
import { Input, Button, Icon } from '@rneui/base'

export default function App() {
  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name='ListGradesNav' component={ListGrades} />
        <Stack.Screen name='GradeFormsNav' component={GradeForms} /> */}
      {/* </Stack.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen
          name='DrawersProductosNav'
          component={paginas}
          options={{
            title: "NOTAS"
          }}
        />
        <Drawer.Screen
          name='DrawersEjemploTabs'
          component={tabNav}
          options={{
            title: "Ejemplo Tabs"
          }}
        />
        <Drawer.Screen
          name='DrawersFinSecion'
          component={paginas}
          options={{
            title: "Finalizar Secion"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const paginas = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='ListGradesNav' component={ListGrades} />
      <Stack.Screen name='GradeFormsNav' component={GradeForms} />
    </Stack.Navigator>
  )
}

const tabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TabContenidoA'
        component={CotenidoA}
        options={{
          headerShown: false,
          tabBarLabel: 'Configuracion',
          tabBarIcon: () => {
            return <Icon name="tool" size={24} color='black' type="ant-desing" />
          }
        }}
      />
      <Tab.Screen
        name='TabContenidoB'
        component={CotenidoB}
        options={{
          headerShown: false,
          tabBarLabel: 'Acerca de',
          tabBarIcon: () => {
            return <Icon name="mail" size={24} color='black' type="ant-desing" />
          }
        }}
      />
    </Tab.Navigator>

  )
}
