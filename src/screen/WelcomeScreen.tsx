//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const WelcomeScreen = (props:any) => {
    return (
        <View>
          <View>
            <Text testID='welcome' style ={styles.screenTitle}>Welcome to BTC</Text>
          </View>
        <TouchableOpacity testID='createProject' style = {styles.button} onPress={() => {props.navigation.navigate('CreateProject')}}>
          <Text>Create Project</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='addTimesheet' style = {styles.button} onPress={() => {props.navigation.navigate('AddTimesheet')}}>
          <Text>Add Timesheet</Text>
        </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
    button: {
        backgroundColor: '#DDDDDD',
        borderRadius: 25,
        alignItems: 'center',
        padding: 10,
        marginTop: 35,
      }
});

//make this component available to the app
export default WelcomeScreen;
