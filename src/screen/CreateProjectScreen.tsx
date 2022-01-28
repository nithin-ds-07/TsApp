//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const CreateProjectScreen = (props:any) => {
    const [projectName, setProjectName] = useState('');
    const [projectManager, setProjectManager] = useState('');
    const [lead, setLead] = useState('');
    const [clientName, setClientName] = useState('');
    return (
        <View>
            <Text testID='createProjectScreen' style={styles.screenTitle}>Create New Project</Text>
            <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Project Name</Text>
            <TextInput
            testID='enterProName'
            style={styles.textfield}
            placeholder='Enter thr project name'
            value={projectName}
            onChangeText={(val) => setProjectName(val)}
            />
            <Text style={styles.formTitle}>Project Manager</Text>
            <TextInput
            testID='enterManName'
            style={styles.textfield}
            placeholder='Enter thr project name'
            value={projectManager}
            onChangeText={(val) => setProjectManager(val)}
            />
            <Text style={styles.formTitle}>Project Lead</Text>
            <TextInput
            testID='enterLeadName'
            style={styles.textfield}
            placeholder='Enter thr project name'
            value={lead}
            onChangeText={(val) => setLead(val)}
            />
            <Text style={styles.formTitle}>Client Name</Text>
            <TextInput
            testID='enterClientName'
            style={styles.textfield}
            placeholder='Enter thr project name'
            value={clientName}
            onChangeText={(val) => setClientName(val)}
            />
            <TouchableOpacity testID='createProjectButton'  style = {styles.button} onPress={() => props.navigation.navigate('ProjectList', {projectName, projectManager, lead, clientName})}>
                <Text>Create</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    formContainer: {
        marginTop: '30%',
        paddingHorizontal: 40
      },
      screenTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 80
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
      button: {
        backgroundColor: '#DDDDDD',
        borderRadius: 25,
        alignItems: 'center',
        padding: 10,
        marginTop: 35,
      }
});

//make this component available to the app
export default CreateProjectScreen;
