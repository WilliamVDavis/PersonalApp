import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

// import {WebView} from 'react-native';
// import {WebView} from 'react-native';
export default class LinksScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        text: 'Height',
        text1: 'Weight',
        text2: 'Gender'
      };
    }
    render(){
    return (
      <ScrollView style={styles.container}>
      <Text style= {{ fontSize: 56, fontWeight: "bold"}}>
        Insert Info
      </Text>
        <Input placeholder="Height"/>
        <Input placeholder="Weight"/>
        <Input placeholder="Gender"/>
        <Button
  title="Submit"
/>
    </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#BBB891',
  },
});