
//    this also aroogara
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSignup = async () => {
    if (!username || !email || !password) 
 {
      setError('Error', 'Please fill in all fields.');
      return;
    }
  //
  if (!username || username.length < 3 || username.length > 30) {
    setError('Error', ' Username must be between 3 and 30 characters.');
    return ;
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setError('Error', ' invalid address.');
    return;
  }
  if (!password || password.length < 6) {
    Alert.alert('Error', 'Password must be at least 6 characters long.');
    return;
  }
    try {
      const response = await axios.post('http://10.0.2.2:3000/signup', {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Users registered successfully!');
      } else {
        Alert.alert('Error', 'Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={[styles.input,error &&styles.errorInput]}
        placeholder="Username"
        onChangeText={setUsername}

        value={username}
      />
       {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address" 
 // Set keyboard type for email address
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Signup" 
 onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: 
 {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height:
 40,
    margin: 12,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  errorInput: {
    borderColor: 'red', // Red border if there is an error
  },
});

export default SignupScreen;