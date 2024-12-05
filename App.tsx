
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './screen/SignupScreen';
import LoginScreen from './screen/LoginScreen';
import WellScreen from './screen/WellScreen';
import HomeScreen from './screen/HomeScreen';
import ForgotPasswordScreen from './screen/ForgotPasswordScreen';
import ResetPasswordScreen from './screen/ResetPasswordScreen';
import PhoneOtpScreen from './screen/PhoneOtpScreen';
import SocialMedia from './screen/SocialMedia';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Wellcome" component={WellScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        <Stack.Screen name="Otp" component={PhoneOtpScreen} />
        <Stack.Screen name="Media" component={SocialMedia} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})