import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {{flexGrow: 1}}>
      <View style={styles.formContainer}>
      <Text testID='signinTitle' style ={styles.screenTitle}>Sign In</Text>
        <Text style={styles.formTitle}>Email</Text>
        <TextInput
          testID='enterEmail'
          style={styles.textfield}
          placeholder='Enter Your Email'
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.formTitle}>Password</Text>
        <TextInput
          testID='enterPwd'
          style={styles.textfield}
          placeholder='Enter Your Password'
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text testID='forgetPwd' style = {styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='loginButton' style = {styles.button} onPress={() => {props.navigation.navigate('Welcome')}}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    marginTop: '25%',
    paddingHorizontal: 50
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 40
  },
  formTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2
  },
  textfield: {
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 5
  },
  forgetPassword: {
    textAlign: 'right'
  },
  button: {
    backgroundColor: '#DDDDDD',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10,
    marginTop: 35,
  }
})

export default LoginScreen