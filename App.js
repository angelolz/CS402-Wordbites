import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import KeyboardComponent from './components/components.keyboard';
import SettingScreen from './components/settingsScreen';

const STYLES = ['default', 'dark-content', 'light-content'];

var wordBites = () =>{
  const[hidden, setHidden] = useState(false);
  const[statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const[appBackground, setAppBackGround] = useState(STYLES[2]);
  
  const[curView, setView] = useState("MENU");

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
    setView('GAME');
  }
  function account(){
    setView('ACCOUNT');
  }
  function stats(){
    setView('STATS');
  }
  function settings(){
    setView('SETTINGS');
  }
  
  var buttonRow = <View style={styles.rowBlock}>
                  <View style={styles.buttonContainer}>
                  <StatusBar barStyle={statusBarStyle}/>
                  <Text>WordleGo logo </Text>
                  <Pressable style={styles.smallWordButton} onPress ={() => play()}><Text style={styles.text}>Play</Text></Pressable>
                  <Pressable style={styles.button} onPress ={() => account()}><Text style={styles.text}>Account</Text></Pressable>
                  <Pressable style={styles.smallWordButton} onPress ={() => stats()}><Text style={styles.text}>Stats</Text></Pressable>
                  <Pressable style={styles.button} onPress ={() => settings()}><Text style={styles.text}>Settings</Text></Pressable>
                  </View>
  </View>
  
  var lightSettingScreen = <View >
                      <View>
                        <Text style={styles.lightSettingText}>Settings</Text>
                      </View>
                      <View style={styles.rowBlock}>
                        <StatusBar barStyle={statusBarStyle}/>
                      
                      <Text>Background: </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Pressable style={styles.button} onPress={() => changeAppBackground('light-content')}><Text>Light</Text></Pressable> 
                        </View>
                        <View>
                        <Pressable style={styles.button} onPress={() => changeAppBackground('dark-content')}><Text>Dark</Text></Pressable>
                        </View> 
                      </View>  
                      </View>                                      
  </View>
  
  var darkSettingScreen = <View >
  <View>
    <Text style={styles.lightSettingText}>Settings Dark Mode!!</Text>
  </View>
  <View style={styles.rowBlock}>
    <StatusBar barStyle={statusBarStyle}/>
  
  <Text>Background: </Text>
  <View style={{flexDirection: 'row'}}>
    <View>
      <Pressable style={styles.button} onPress={() => changeAppBackground('light-content')}><Text>Dark</Text></Pressable> 
    </View>
    <View>
    <Pressable style={styles.button} onPress={() => changeAppBackground('dark-content')}><Text>Dark</Text></Pressable>
    </View> 
  </View>  
  </View>                                      
  </View>
  
  function changeAppBackground(appBackgroundColor){
    console.log("The current value is: ", appBackground)
    switch(appBackgroundColor){
      case 'light-content':
        setAppBackGround('light-content');
        console.log("The variable was set to: ",appBackground);
        return lightSettingScreen;
      case 'dark-content':
        
        setAppBackGround('dark-content');
        console.log("The variable was set to: ", appBackground);
        return darkSettingScreen;
    }
  }
  
  
  
  
  
  
  const view  = () => {
    switch(curView){
      case 'MENU':
        return buttonRow;
      case 'GAME':
        return <KeyboardComponent />
      case 'SETTINGS':
        return <SettingScreen/> 
      default:
        return buttonRow;
    }
  }

  var alist = <View style = {styles.container}>
                {view()}
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
  settingContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3
  },
  button:{
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "blue",
    paddingVertical: 12,
    marginBottom: 20,
    
  },
  smallWordButton: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 20
  },
  text: {
    color: 'white',
    letterSpacing: 0.25,
    fontWeight: 'bold',
    textTransform: "uppercase"
  },
  lightSettingText: {
    margin: -100,
    borderWidth: 3
  }
});
