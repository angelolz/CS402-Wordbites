import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

var wordBites = () =>{
  
  var buttonRow = <View style={styles.rowBlock}>
                  <View style={styles.buttonContainer}>
                  <Text>This is where the WordleGo logo will go</Text>
                  <Button title="Button1"/>
                  <Button title="Button2"/>
                  <Button title="Button3"/>
                  <Button title="Button4"/>
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
});
