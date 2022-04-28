import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const Settings = (props) => {
    return (
        <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? 'white' : '#121213' }} isVisible={props.showSettingsOverlay} onBackdropPress={() => { props.toggleSettingsOverlay(false) }}>
            <View style={styles.rowBlock}>
                <View style={styles.backButton}>
                    <Pressable onPress={() => props.toggleSettingsOverlay(false)}>
                        <Ionicons name="close-outline" size={32} color={'#f92f60'} />
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Text style={[styles.settingScreenText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Toggle Theme</Text>
                    <Pressable style={styles.button} onPress={() => props.theme === 'light' ? props.changeTheme('dark') : props.changeTheme('light')}>
                        <Text style={styles.buttonText}>{props.theme === 'light' ? 'Light Mode' : 'Dark Mode'}</Text>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Text style={[styles.settingScreenText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Toggle Colorblind Mode</Text>
                    <Pressable style={styles.button} onPress={() => props.toggleColorblind(!props.colorblind)}>
                        <Text style={styles.buttonText}>{props.colorblind ? 'Colorblind ON' : 'Colorblind OFF'}</Text>
                    </Pressable>
                </View>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? 'white' : '#121213'}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </Overlay>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "blue",
    },
    setting: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
    settingScreenText: {
        fontSize: ((width > height) ? width / 15 : height / 60),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    backButton: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
    }
});

export default Settings;