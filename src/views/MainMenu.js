import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, SafeAreaView, View, Pressable, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Screen } from '../constants/Constants';
import Settings from './Settings';

const { width, height } = Dimensions.get('window');

const MainMenu = (props) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: props.theme === 'light' ? 'white' : '#121213' }]}>
            {props.showSettingsOverlay ?
                <Settings
                    toggleSettingsOverlay={props.toggleSettingsOverlay}
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                    colorblind={props.colorblind}
                    toggleColorblind={props.toggleColorblind}
                    swapKeys={props.swapKeys}
                    toggleSwap={props.toggleSwap}
                /> : null
            }
            <View style={styles.buttonContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={props.colorblind ? require('../../assets/cb_logo.png') : require('../../assets/logo.png')} />
                </View>
                <Pressable style={styles.menuButton} onPress={() => props.setView(Screen.GAME)}>
                    <Ionicons name="play-circle" size={28} color={'white'} />
                    <Text style={styles.text} adjustsFontSizeToFit={true}>Play</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={() => props.setView(Screen.ACCOUNT)}>
                    <Ionicons name="person-circle" size={28} color={'white'} />
                    <Text style={styles.text}>Account</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={() => props.setView(Screen.STATS)}>
                    <Ionicons name="stats-chart" size={28} color={'white'} />
                    <Text style={styles.text}>Stats</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={() => props.toggleSettingsOverlay(true)}>
                    <Ionicons name="settings" size={28} color={'white'} />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? 'white' : '#121213'}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logoContainer: {
        width: width,
        height: height * 0.21,
        padding: 5
    },
    buttonContainer: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    menuButton: {
        minWidth: "50%",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 8,
        backgroundColor: "#4bb84b",
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default MainMenu;