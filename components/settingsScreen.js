import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';


const STYLES = ['default', 'dark-content', 'light-content'];

const SettingScreen = () =>{
    const[appBackground, setAppBackGround] = useState(STYLES[2]);
    
    
    return(
        <View >
            <View>
                <Text style={styles.lightSettingText}>Settings</Text>
            </View>
            <View style={styles.rowBlock}>
                
                      
                <Text>Background:</Text>
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
    );     
};

const styles = StyleSheet.create({
    button:{
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "blue",
        paddingVertical: 12,
        marginBottom: 20,
        
    },
    lightSettingText: {
        margin: -100,
        borderWidth: 3
    },
});


export default SettingScreen;