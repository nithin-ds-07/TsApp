//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AddTimesheetScreen from '../screen/AddTimesheetScreen';
import CreateProjectScreen from '../screen/CreateProjectScreen';
import LoginScreen from '../screen/LoginScreen';
import LogoutScreen from '../screen/LogoutScreen';
import ProjectListScreen from '../screen/ProjectListScreen';
import TimesheetListScreen from '../screen/TimesheetListScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import FillTimesheetScreen from '../screen/FillTimesheetScreen';


const Stack = createNativeStackNavigator();

// create a component
const ScreenNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name= 'Login' component = {LoginScreen}/>
                <Stack.Screen name= 'Welcome' component = {WelcomeScreen}/>
                <Stack.Screen name= 'CreateProject' component = {CreateProjectScreen}/>
                <Stack.Screen name= 'ProjectList' component = {ProjectListScreen}/>
                <Stack.Screen name= 'AddTimesheet' component = {AddTimesheetScreen}/>
                <Stack.Screen name= 'FillTimesheet' component = {FillTimesheetScreen}/>
                <Stack.Screen name= 'TimesheetList' component = {TimesheetListScreen}/>
                <Stack.Screen name= 'Logout' component = {LogoutScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};



//make this component available to the app
export default ScreenNav;
