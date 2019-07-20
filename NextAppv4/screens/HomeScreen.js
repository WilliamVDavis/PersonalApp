import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



export default function HomeScreen() {
  return (

    
    <View style={styles.container}>
    <Text style= {{ fontSize: 56, fontWeight: "bold"}}>
    <Text style={styles.titleText}>
    Next-U App
    </Text>
    </Text>
 <View style={styles.container}>
    <Image
            source={
              __DEV__
                ? require('../assets/images/dumbbell.jpeg')
                : require('../assets/images/dumbbell.jpeg')
            }
            style={styles.welcomeImage}
          />  
    



    <View style={styles.container}>
    <Text style= {{ fontSize: 30 }}>
    <Text style={styles.titleText}>
   Begin the new you.
    </Text>
    </Text>
    
    
    </View>
    </View>
  </View>
   
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B88A2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent:'center',
  }  
});
