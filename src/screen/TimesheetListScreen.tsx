//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const TimesheetListScreen = (props: any) => {
    return (
        <View>
            <View>
                <Text style={styles.timesheet}>Your timeSheet</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.details}>
                    <Text style={styles.text}>Project Name: </Text>
                    <Text>{props.route.params.selectedId.projectName}</Text>
                    <Text style={styles.text}>Manager Name: </Text>
                    <Text>{props.route.params.selectedId.managerName}</Text>
                    <Text style={styles.text}>Used Hours: </Text>
                    <Text>{props.route.params.usedHour}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Welcome') }}>
                    <Text>Back to dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='logoutScreen' style={styles.button} onPress={() => { props.navigation.navigate('Logout') }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    timesheet: {
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 22,
        fontWeight: 'bold'
    },
    details: {
        padding: 5,
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 25
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    receivedText: {
        fontStyle: 'italic'
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
export default TimesheetListScreen;
