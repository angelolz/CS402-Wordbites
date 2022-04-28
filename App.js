import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import KeyboardComponent from './components/components.keyboard';
import SettingScreen from './components/settingsScreen';
import StatsScreen from './components/components.stats';

import GameBoard from './components/components.gameboard';
const STYLES = ['default', 'dark-content', 'light-content'];

var wordBites = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [appBackground, setAppBackGround] = useState(STYLES[2]);
  const [curView, setView] = useState("MENU");

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  }

  function play() {
    setView('GAME');
  }
  function account() {
    setView('ACCOUNT');
  }
  function stats() {
    setView('STATS');
  }
  function settings() {
    setView('SETTINGS');
  }

  var buttonRow = <View>
    <View style={styles.buttonContainer}>
      <StatusBar barStyle={statusBarStyle} />
      <Text>WordleGo logo </Text>
      <Pressable style={styles.smallWordButton} onPress={() => play()}><Text style={styles.text}>Play</Text></Pressable>
      <Pressable style={styles.button} onPress={() => account()}><Text style={styles.text}>Account</Text></Pressable>
      <Pressable style={styles.smallWordButton} onPress={() => stats()}><Text style={styles.text}>Stats</Text></Pressable>
      <Pressable style={styles.button} onPress={() => settings()}><Text style={styles.text}>Settings</Text></Pressable>
    </View>
  </View>

  const view = () => {
    switch (curView) {
      case 'MENU':
        return buttonRow;
      case 'GAME':
        return <GameBoard />
      case 'STATS':
        return <StatsScreen backGroundColor={appBackground} toggleBackGround={setAppBackGround} changeView={setView}/>
      case 'SETTINGS':
        return <SettingScreen backGroundColor={appBackground} toggleBackGround={setAppBackGround} changeView={setView} />
      default:
        return buttonRow;
    }
  }

  if (appBackground === 'light-content') {
    var alist = <View style={styles.container}>
      {view()}
    </View>

    return (alist)
  } else {
    var alist = <View style={styles.darkContainer}>
      {view()}
    </View>
    return (alist)
  }
}

export default wordBites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#363537',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
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
  }
});
