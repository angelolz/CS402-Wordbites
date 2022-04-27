import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const {width, height} = Dimensions.get('window');

const STYLES = ['default', 'dark-content', 'light-content'];

const SettingScreen = (props) =>{
    
    const[appBackground, setAppBackGround] = useState(props.backGroundColor);
    const[statusBarStyle, setStatusBarStyle] = useState(STYLES[1])
    
    var currentSetting;
    getCurrentBackgroundSetting();
    
    function changeAppBackground(appBackgroundColor){
        switch(appBackgroundColor){
          case 'light-content':
            changeBackground = props.toggleBackGround;
            changeBackground(STYLES[2]);
            setAppBackGround('light-content');
            getCurrentBackgroundSetting();
            return;
          case 'dark-content':
            changeBackground = props.toggleBackGround;
            changeBackground(STYLES[1]);
            setAppBackGround('dark-content');
            getCurrentBackgroundSetting();
            return;
        }
    }
    
    function returnHome(){
        //This will allow you save the state function that will allow you to update the view!!!
        changeView = props.changeView;
        changeView('Menu');
        return;
    }
    
    function getCurrentBackgroundSetting(){
        if(appBackground == 'light-content'){
            currentSetting = <View style={styles.rowBlockLight}>
                                <StatusBar barStyle = {statusBarStyle}/>
                                <View style={styles.backButton}>
                                    <Pressable onPress={() => returnHome()}><Text style={styles.lightButtonText}>Home</Text></Pressable>
                                </View>
                                <View>
                                    <Text style={styles.settingScreenText}>Settings</Text>
                                </View>
                                
                                <View style={styles.buttonRow}>
                                    <Text style={styles.settingScreenText}>Background Setting:</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <View>
                                                <Pressable style={styles.button} onPress={() => changeAppBackground('light-content')}><Text style={styles.lightButtonText}>Light Mode</Text></Pressable> 
                                            </View>
                                            <View>
                                                <Pressable style={styles.button} onPress={() => changeAppBackground('dark-content')}><Text style={styles.lightButtonText}>Dark Mode</Text></Pressable>
                                            </View> 
                                        </View>  
                                </View>
                                                                     
            </View>
        }else if(appBackground == 'dark-content'){
            currentSetting = <View style={styles.rowBlockDark}>
                                <StatusBar barStyle = {statusBarStyle}/>
                                <View style={styles.backButton}>
                                    <Pressable onPress={() => returnHome()}><Text style={styles.lightButtonText}>Home</Text></Pressable>
                                </View>
                                <View>
                                    <Text style={styles.darkSettingScreenText}>Settings</Text>
                                </View>
                                
                                <View style={styles.buttonRow}>
                                    <Text style={styles.darkSettingScreenText}>Background Setting:</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <View>
                                                <Pressable style={styles.button} onPress={() => changeAppBackground('light-content')}><Text style={styles.darkButtonText}>Light Mode</Text></Pressable> 
                                            </View>
                                            <View>
                                                <Pressable style={styles.button} onPress={() => changeAppBackground('dark-content')}><Text style={styles.darkButtonText}>Dark Mode</Text></Pressable>
                                            </View> 
                                        </View>  
                                </View>                                      
            </View>
        }
    }
    
    return(
        currentSetting
    );     
};

const styles = StyleSheet.create({
    rowBlockLight: {
        width: "100%",
        height: "100%",
    },
    rowBlockDark: {
        width: "100%",
        height: "100%",
        backgroundColor : '#363537'
    },
    button:{
        borderWidth: 2,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "blue"
    },
    buttonRow:{
        flexDirection: 'row',
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    lightButtonText: {
        color: 'white'   
    },
    darkButtonText:{
        color: 'white'
    },
    settingScreenText: {
        fontSize: ((width > height)? width/15 : height/60),
        alignSelf: 'center',
        paddingTop: 20,
    },
    darkSettingScreenText: {
        fontSize: ((width > height)? width/15 : height/60),
        alignSelf: 'center',
        paddingTop: 20,
        color: 'white'
    },
    backButton : {
        borderWidth: 2,
        marginTop: 25,
        marginLeft: 10,
        padding: 10,
        borderRadius: 5,
        width: 75,
        backgroundColor: 'blue'
    }
});


export default SettingScreen;