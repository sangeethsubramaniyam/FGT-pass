import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WellScreen = () => {
    const navigation =useNavigation();
    const signupkaro =() =>{
        navigation.navigate("Signup")
    };
    const loginkaro =() =>{
      navigation.navigate("Login")
  };
  return (
    <View>
<Text style={{fontSize:20,fontWeight:800,textAlign:'center',marginTop:30}}>Wellcome to limat IT solutions</Text>
<Text style={{marginTop:200,marginLeft:70,color:'#fff',padding:13,backgroundColor:'#d90368',width:'70%',alignItems:'center',textAlign:'center',borderRadius:5,fontSize:15}} onPress={loginkaro}>Already have an account ? LOGIN</Text>
<Text style={{marginTop:60,marginLeft:130,fontSize:17}} onPress={signupkaro}> New register Here</Text>
    </View>
  )
}

export default WellScreen

const styles = StyleSheet.create({})