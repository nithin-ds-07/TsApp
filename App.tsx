import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenNav from './src/Navigation/ScreenNav';

const App = () => {
  return (
    <View style = {{flex: 1}}>
      <ScreenNav/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
