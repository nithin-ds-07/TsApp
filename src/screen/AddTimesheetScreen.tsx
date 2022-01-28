//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { PROJECTS } from '../Data/dummy-data';

// create a component

const AddTimesheetScreen = (props: any) => {
    const renderGridItem = (itemData: any) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate('FillTimesheet',
                        {
                            projectId: itemData.item.id
                        })}>
                <View style={styles.gridItem}>
                    <Text style={styles.gridText}>{itemData.item.projectName}</Text>
                    <Text style={styles.gridText}>{itemData.item.managerName}</Text>
                    <Text style={styles.gridText}>{itemData.item.totalHours}hrs</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            data={PROJECTS}
            renderItem={renderGridItem}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    gridItem: {
        justifyContent: 'center',
        margin: 15,
        flexDirection: 'row',
        alignContent: 'space-around',
        borderBottomWidth: 1,
        height: 60,
    },
    gridText: {
        paddingHorizontal: 35,
        fontStyle: 'italic'

    }
});

//make this component available to the app
export default AddTimesheetScreen;
