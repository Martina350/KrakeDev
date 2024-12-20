import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GradeForms } from './app/screens/GradeForm'
import { ListGrades } from './app/screens/ListGrades'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ListGradesNav' component={ListGrades} />
        <Stack.Screen name='GradeFormsNav' component={GradeForms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

