import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';

import { ColorSchemes } from '../constants/Constants'
import { showToast } from '../constants/Utils';

const { width, height } = Dimensions.get('window');

const Settings = (props) => {
    return (
        <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor, width: '75%' }} isVisible={props.showSettingsOverlay} onBackdropPress={() => { props.toggleSettingsOverlay(false) }}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Settings</Text>
                <View style={styles.backButton}>
                    <Pressable onPress={() => props.toggleSettingsOverlay(false)}>
                        <Ionicons name="close-outline" size={32} color={'#f92f60'} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.setting}>
                <View style={styles.settingText}>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Use Dark Theme</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.theme === 'light' ? props.changeTheme('dark') : props.changeTheme('light')}>
                    {
                        props.theme === 'light' ?
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View style={styles.settingText}>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Toggle Colorblind Mode</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.toggleColorblind(!props.colorblind)}>
                    {
                        props.colorblind ?
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View style={styles.settingText}>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Swap Enter/Delete Keys</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.toggleSwap(!props.swapKeys)}>
                    {
                        props.swapKeys ?
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View style={styles.settingText}>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Hard Mode</Text>
                    <Text style={[styles.settingDescText, { color: props.theme === 'light' ? ColorSchemes.light.text2Color : ColorSchemes.dark.text2Color }]}>Revealed hints must be used in next guesses</Text>
                </View>
                <Pressable style={styles.button} onPress={() => {
                    if (props.numGuesses == undefined || props.numGuesses === 0)
                        props.toggleHardMode(!props.hardMode)
                    else
                        showToast('Hard mode can only be changed at the start of the round', props.theme)
                }}

                >
                    {
                        props.hardMode ?
                            <Ionicons name="checkmark-circle-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={32} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor}
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
    settingText: {
        flexDirection: 'column'
    },
    settingTitleText: {
        fontSize: ((width > height) ? width / 15 : height / 40),
        paddingBottom: 0,
        paddingRight: 5,
    },
    settingDescText: {
        fontSize: ((width > height) ? width / 15 : height / 65),
    },
    backButton: {
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }
});

export default Settings;