//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { PROJECTS } from '../Data/dummy-data';

// create a component
const FillTimesheetScreen = (props: any) => {
    const [usedHour, setUsedHour] = useState('')
    const proId = props.route.params.projectId;
    const selectedId = PROJECTS.find(pro => pro.id === proId)
    return (
        <View>
            <View>
                <Text style={styles.fillTimesheet}>Fill the timesheet</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.details}>
                    <Text style={styles.text}>Project Name:</Text>
                    <Text style={styles.receivedText}>{selectedId?.projectName}</Text>
                    <Text style={styles.text}>Manager Name:</Text>
                    <Text style={styles.receivedText}>{selectedId?.managerName}</Text>
                    <Text style={styles.text}>Total Hours:</Text>
                    <Text style={styles.receivedText}>{selectedId?.totalHours}</Text>
                    <Text style={styles.text}>Used Hours:</Text>
                    <TextInput
                        testID='usedHrs'
                        style={styles.textfield}
                        placeholder='Hrs'
                        value={usedHour}
                        keyboardType='number-pad'
                        onChangeText={(val) => setUsedHour(val)}
                    />
                </View>
                <TouchableOpacity testID='addTimesheetButton' style={styles.button} onPress={() => { props.navigation.navigate('TimesheetList', { usedHour, selectedId }) }}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    fillTimesheet: {
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
    textfield: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginBottom: 4
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
export default FillTimesheetScreen;
