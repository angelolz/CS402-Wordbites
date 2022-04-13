import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];

var wordBites = () =>{
  const[hidden, setHidden] = useState(false);
  const[statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  
  const changeStatusBarVisibility = () => setHidden(!hidden);
  
  const changeStatusBarStyle = () =>{
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  }
  
  function play(){
    console.log("Pushed the play");
  }
  function account(){
    console.log("Pushed the account");
  }
  function stats(){
    console.log("Pushed the stats");
  }
  function settings(){
    console.log("Pushed the setting");
  }
  
  
  
  var buttonRow = <View style={styles.rowBlock}>
                  <View style={styles.buttonContainer}>
                  <StatusBar barStyle={statusBarStyle}/>
                  <Text>WordleGo logo </Text>
                  <Pressable style={styles.button} onPress ={() => play()}><Text style={styles.text}>Play</Text></Pressable>
                  <Pressable style={styles.button} onPress ={() => account()}><Text style={styles.text}>Account</Text></Pressable>
                  <Pressable style={styles.button} onPress ={() => stats()}><Text style={styles.text}>Stats</Text></Pressable>
                  <Pressable style={styles.button} onPress ={() => settings()}><Text style={styles.text}>Settings</Text></Pressable>
                  </View>
  </View>
  
  var alist = <View style = {styles.container}>
              {buttonRow}
              </View>
  return (alist)  
}

export default wordBites;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "blue",
    paddingVertical: 12,
    marginBottom: 20,
    
  },
  text: {
    color: 'white',
    letterSpacing: 0.25,
    fontWeight: 'bold',
    textTransform: "uppercase"
  }
});
