import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';

const SocialMedia = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your actual client ID
    });
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);

      // Send the token to the backend
      const { idToken } = userInfo;
      const response = await axios.post('http://10.0.2.2:3000/google-login', { token: idToken });

      const { message, token } = response.data;
      if (message === 'Login successful') {
        Alert.alert('Login Successful', 'You have logged in successfully!');
        console.log('JWT Token:', token); // Use this for further authenticated requests
      } else {
        Alert.alert('Login Failed', 'Please try again.');
      }
    } catch (error) {
      console.error(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign In Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign In in Progress');
      } else {
        Alert.alert('Something went wrong', error.message);
      }
    }
  };

  return (
    <View>
      {userInfo ? (
        <Text>Welcome, {userInfo.user.name}</Text>
      ) : (
        <Button title="Login with Google" onPress={handleGoogleLogin} />
      )}
    </View>
  );
};

export default SocialMedia;