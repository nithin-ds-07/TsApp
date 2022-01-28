//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const ProjectListScreen = (props: any) => {
    return (
        <View>
            <View>
                <Text style={styles.successMsg}>Project has been created successfully!</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.details}>
                    <Text style={styles.text}>Project Name:</Text>
                    <Text testID='resProName' style={styles.receivedText}>{props.route.params.projectName}</Text>
                    <Text style={styles.text}>Manager:</Text>
                    <Text testID='resManName' style={styles.receivedText}>{props.route.params.projectManager}</Text>
                    <Text style={styles.text}>Team Lead:</Text>
                    <Text testID='resLeadName' style={styles.receivedText}>{props.route.params.lead}</Text>
                    <Text style={styles.text}>Client:</Text>
                    <Text testID='resClientName' style={styles.receivedText}>{props.route.params.clientName}</Text>
                </View>
                <TouchableOpacity testID='dashboardButton' style={styles.button} onPress={() => { props.navigation.navigate('Welcome') }}>
                    <Text>Back to dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Logout') }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    successMsg: {
        marginTop: '10%',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green'
    },
    details: {
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
export default ProjectListScreen;
