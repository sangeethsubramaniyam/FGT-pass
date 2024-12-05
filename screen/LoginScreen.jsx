import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const Handleforgot =() =>{
    navigation.navigate("Forgot")
};
const HandleOtp=() =>{
  navigation.navigate("Otp")
};
  // 
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter your username and password.');
      return;
    }
  
    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        username,
        password,
      });
  
      if (response.status === 200) {
        Alert.alert('Success', 'Login successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home', { user: response.data.user }),
          },
        ]);
      } else if (response.status === 401) {
        Alert.alert('Error', 'Invalid username or password.');
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername} 

        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{margin:20,fontWeight:600}} onPress={Handleforgot}>Forgot password?</Text>
      <Text onPress={HandleOtp}>Login with phone number</Text>

       <Text onPress={()=>navigation.navigate('Media')} style={{margin:50}}  >Login with Google</Text>

    </View>
  );
};

const styles = StyleSheet.create({ 

  
});

export default LoginScreen;