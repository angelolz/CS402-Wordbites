import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const { width, height } = Dimensions.get('window');
import { DataTable } from 'react-native-paper';

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
        
        if(appBackground == 'light-content'){
            currentStats = <View style={styles.rowBlock}>
            <StatusBar barStyle={statusBarStyle} />
            <View style={styles.backButton}>
                    <Pressable onPress={() => returnHome()}><Text style={styles.lightButtonText}>Home</Text></Pressable>
            </View>
            <View>
                <DataTable>
                <DataTable.Header>
                    <DataTable.Title><Text style={styles.lightDataTableHeader}>User Stats</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={styles.lightDataTableHeader}>Wins</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={styles.lightDataTableHeader}>Loses</Text></DataTable.Title>
                </DataTable.Header>
                
                <DataTable.Row>
                    <DataTable.Cell>5 Letter Stats</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                    <DataTable.Cell numeric>10</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>6 Letter Stats</DataTable.Cell>
                    <DataTable.Cell numeric>4</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>7 Letter Stats</DataTable.Cell>
                    <DataTable.Cell numeric>2</DataTable.Cell>
                    <DataTable.Cell numeric>20</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>8 Letter Stats</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                </DataTable.Row>
                
                </DataTable>
                
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell>5 Letter Current Streak: </DataTable.Cell>
                        <DataTable.Cell>2 game win streak</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>6 Letter Current Streak: </DataTable.Cell>
                        <DataTable.Cell>3 game lose streak</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>7 Letter Current Streak: </DataTable.Cell>
                        <DataTable.Cell>10 game lose streak</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>8 Letter Current Streak: </DataTable.Cell>
                        <DataTable.Cell>No games played</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            
        </View>
        }else if (appBackground == 'dark-content'){
            currentStats = <View style={styles.rowBlock}>
            <StatusBar barStyle={statusBarStyle} />
            <View style={styles.backButton}>
                    <Pressable onPress={() => returnHome()}><Text style={styles.darkButtonText}>Home</Text></Pressable>
            </View>
            <View>
                <DataTable theme= {{dark: true}} >
                <DataTable.Header>
                    <DataTable.Title><Text style={styles.darkDataTableHeader}>User Stats</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={styles.darkDataTableHeader}>Wins</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={styles.darkDataTableHeader}>Loses</Text></DataTable.Title>
                </DataTable.Header>
                
                <DataTable.Row>
                    <DataTable.Cell><Text style ={styles.darkDataTableRow}>5 Letter Stats</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>15</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>10</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell><Text style ={styles.darkDataTableRow}>6 Letter Stats</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>4</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>15</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell><Text style ={styles.darkDataTableRow}>7 Letter Stats</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>2</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>20</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell><Text style ={styles.darkDataTableRow}>8 Letter Stats</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>0</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style ={styles.darkDataTableRow}>0</Text></DataTable.Cell>
                </DataTable.Row>
                
                </DataTable>
                
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>5 Letter Current Streak: </Text></DataTable.Cell>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>2 game win streak</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>6 Letter Current Streak: </Text></DataTable.Cell>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>3 game lose streak</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>7 Letter Current Streak: </Text></DataTable.Cell>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>10 game lose streak</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>8 Letter Current Streak: </Text></DataTable.Cell>
                        <DataTable.Cell><Text style ={styles.darkDataTableRow}>No games played</Text></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            
        </View>
        }
        
        
        
    }
    
    return (
        currentStats
    );
    
};

const styles = StyleSheet.create({
    lightButtonText: {
        color: 'white'
    },
    darkButtonText : {
        color: 'white'
    },
    lightDataTableHeader: {
        fontSize: 20
    },
    darkDataTableHeader : {
        color: 'white',
        fontSize: 20
    },
    darkDataTableRow: {
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
    },
    rowBlock: {
        width: "100%",
        height: "100%",
    }
});

export default StatsScreen;