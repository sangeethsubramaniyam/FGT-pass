import { Button, StyleSheet,Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
 <View style={{marginTop:100}}>
 <Text style={{marginLeft:160,fontSize:19,fontWeight:800,color:'#d90368'}}>LOGIN</Text>
     <View>
        {/* Input fields for username, email, and password */}
        <TextInput
          placeholder="Username"
         style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12}}
       />
      
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:90,borderRadius:12}}
        />
        
       {/* Signup button */}
       <View style={{marginTop:180,width:'60%',marginLeft:87,borderRadius:20}}>
       <Button title="LOGIN" color='#d90368'/>
       </View>
    </View>
    </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})