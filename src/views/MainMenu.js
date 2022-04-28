import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Screen } from '../constants/Constants';
import Settings from './Settings';

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
                /> : null
            }
            <View style={styles.buttonContainer}>
                <Text>Wordbites logo </Text>
                <Pressable style={styles.smallWordButton} onPress={() => { console.log(Screen.GAME); props.setView(Screen.GAME) }}>
                    <Text style={styles.text}>Play</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => props.setView(Screen.ACCOUNT)}>
                    <Text style={styles.text}>Account</Text>
                </Pressable>
                <Pressable style={styles.smallWordButton} onPress={() => props.setView(Screen.STATS)}>
                    <Text style={styles.text}>Stats</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => props.toggleSettingsOverlay(true)}>
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

export default MainMenu;