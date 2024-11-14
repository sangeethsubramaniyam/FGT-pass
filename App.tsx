
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './screen/SignupScreen';
import LoginScreen from './screen/LoginScreen';
import WellScreen from './screen/WellScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Ahwel" component={WellScreen}/>
        <Stack.Screen name="Saniya" component={SignupScreen}/>
        <Stack.Screen name="Loki" component={LoginScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})