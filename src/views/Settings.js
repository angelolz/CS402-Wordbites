import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const Settings = (props) => {
    return (
        <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? 'white' : '#121213', width: '75%' }} isVisible={props.showSettingsOverlay} onBackdropPress={() => { props.toggleSettingsOverlay(false) }}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: props.theme === 'light' ? 'black' : 'white' }]}>Settings</Text>
                <View style={styles.backButton}>
                    <Pressable onPress={() => props.toggleSettingsOverlay(false)}>
                        <Ionicons name="close-outline" size={32} color={'#f92f60'} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.setting}>
                <Text style={[styles.settingScreenText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Use Dark Theme</Text>
                <Pressable style={styles.button} onPress={() => props.theme === 'light' ? props.changeTheme('dark') : props.changeTheme('light')}>
                    {
                        props.theme === 'light' ?
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} /> :
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <Text style={[styles.settingScreenText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Toggle Colorblind Mode</Text>
                <Pressable style={styles.button} onPress={() => props.toggleColorblind(!props.colorblind)}>
                    {
                        props.colorblind ?
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} /> :
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <Text style={[styles.settingScreenText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Swap Enter/Backspace Keys</Text>
                <Pressable style={styles.button} onPress={() => props.toggleSwap(!props.swapKeys)}>
                    {
                        props.swapKeys ?
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} /> :
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? 'black' : 'white'} />
                    }
                </Pressable>
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
        marginVertical: 5
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    title: {
        fontWeight: 'bold',
        fontSize: ((width > height) ? width / 15 : height / 30),
        textAlign: 'center',
        paddingHorizontal: 10
    },
    settingScreenText: {
        flex: 1,
        fontSize: ((width > height) ? width / 15 : height / 50),
        alignSelf: 'center',
        paddingRight: 5
    },
    backButton: {
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }
});

export default Settings;