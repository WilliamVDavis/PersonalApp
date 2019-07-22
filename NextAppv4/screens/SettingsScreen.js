import React from 'react';
import {Text} from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';

export default function SettingsScreen() {
  
  return (
    <View style={styles.container}>
    <Text style= {{ fontSize: 56, fontWeight: "bold"}}>

      Workouts
    </Text>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Transformation For U',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5BE9E',
  },
});