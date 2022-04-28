import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Overlay } from 'react-native-elements'
const { width, height } = Dimensions.get('window');

const Settings = (props) => {
    return (
        <Overlay style={styles.overlay} isVisible={props.showSettingsOverlay} onBackdropPress={() => { props.toggleSettingsOverlay(false) }}>
            <View style={styles.rowBlock}>
                <View style={styles.backButton}>
                    <Pressable onPress={() => props.toggleSettingsOverlay(false)}><Text style={styles.lightButtonText}>Close</Text></Pressable>
                </View>
                <View>
                    <Text style={props.theme === 'light' ? styles.settingScreenText : styles.darkSettingScreenText}>Settings</Text>
                </View>

                <View style={styles.buttonRow}>
                    <Text style={props.theme === 'light' ? styles.settingScreenText : styles.darkSettingScreenText}>Background Setting:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Pressable style={styles.button} onPress={() => props.changeTheme('light')}>
                                <Text style={styles.darkButtonText}>Light Mode</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable style={styles.button} onPress={() => props.changeTheme('dark')}>
                                <Text style={styles.darkButtonText}>Dark Mode</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    rowBlock: {
        // width: "100%",
        // height: "100%",
    },
    button: {
        borderWidth: 2,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "blue"
    },
    buttonRow: {
        flexDirection: 'row',
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    lightButtonText: {
        color: 'white'
    },
    darkButtonText: {
        color: 'white'
    },
    settingScreenText: {
        fontSize: ((width > height) ? width / 15 : height / 60),
        alignSelf: 'center',
        paddingTop: 20,
        color: 'black'
    },
    darkSettingScreenText: {
        fontSize: ((width > height) ? width / 15 : height / 60),
        alignSelf: 'center',
        paddingTop: 20,
        color: 'white'
    },
    backButton: {
        borderWidth: 2,
        marginTop: 25,
        marginLeft: 10,
        padding: 10,
        borderRadius: 5,
        width: 75,
        backgroundColor: 'blue'
    }
});

export default Settings;