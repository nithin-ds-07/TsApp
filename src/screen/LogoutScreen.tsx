//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const LogoutScreen = () => {
    return (
        <View>
            <Text style={styles.successMsg}>You have been loggedout successfully</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    successMsg: {
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green'
    },
});

//make this component available to the app
export default LogoutScreen;
