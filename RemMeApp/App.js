import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  
  logIn(){
    console.log('logging in');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput style={styles.nameInput}></TextInput>
        <Button title='Log In' style={styles.logInBtn} onPress={this.logIn()}></Button>
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9D00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInput:{
    width: '80%',
    backgroundColor: '#445742',
    color: '#fff69a',
  },
  logInBtn:{
    color: '#445742',
  },
});
