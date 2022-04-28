import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const { width, height } = Dimensions.get('window');

const STYLES = ['default', 'dark-content', 'light-content'];

const StatsScreen = (props) => {
    
    const [appBackground, setAppBackGround] = useState(props.backGroundColor);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1])
    
    var currentStats;
    getCurrentStatsScreen();
    
    function returnHome(){
        changeView = props.changeView;
        changeView('Menu');
    }
    
    function getCurrentStatsScreen(){
        currentStats = <View>
            <View style={styles.backButton}>
                    <Pressable onPress={() => returnHome()}><Text style={styles.lightButtonText}>Home</Text></Pressable>
                </View>
            <Text>This will be the stats screen and we will need a table for it</Text>
        </View>
    }
    
    return (
        currentStats
    );
    
};

const styles = StyleSheet.create({
    lightButtonText: {
        color: 'white'
    },
    backButton: {
        borderWidth: 2,
        marginTop: 35,
        marginLeft: 10,
        padding: 10,
        borderRadius: 5,
        width: 75,
        backgroundColor: 'blue'
    }
});

export default StatsScreen;