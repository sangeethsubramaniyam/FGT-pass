
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View,Text, TextInput, Button,Alert } from 'react-native';

const SignupScreen = () => {
  const navigation =useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup 
 = async () => {
  if (!username || !email || !password) {
    Alert.alert('Error', 'Please fill all the fields.');
    return; // Stop further execution if any field is empty
  }

    try {
      const response = await axios.post('http://10.0.2.2:3000/signup',   
 { // Ensure correct URL
        username,
        email,
        password,
      });

      // const data = await response.json();
      const data = response.data;

      if (response.status === 200) //0k
      
      {
        // Handle successful signup 
        console.log('Signup successful:', data);
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Loki')
        // Navigate to the next screen or show a success message
      } else {
        // Handle error response
        console.error('Signup failed:', data.error);
        Alert.alert('Error', 'Something went wrong. Please try again.');

        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      // Display an error message to the user
    }
  };

  return (
      <View style={{marginTop:100}}>
     <Text style={{marginLeft:120,fontSize:19,fontWeight:800,color:'#d90368'}}>CREATE A ACCOUNT </Text>
        <View>
           {/* Input fields for username, email, and password */}
           <TextInput
             placeholder="Username"
           value={username}
           required
             onChangeText={setUsername}
            style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12}}
          />
          <TextInput
            placeholder="Email"
             value={email}
             onChangeText={setEmail}
             keyboardType="email-address"
             required
             style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:60,borderRadius:12}}
           />
           <TextInput
             placeholder="Password"
             value={password}
             required
             onChangeText={setPassword}
             secureTextEntry
             style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:90,borderRadius:12}}
           />
           
          {/* Signup button */}
          <View style={{marginTop:180,width:'60%',marginLeft:87,borderRadius:20}}>
          <Button title="Sign Up" color='#d90368' onPress={ handleSignup }/>
          </View>
       </View>
       </View>
  );
};

export default   
 SignupScreen;