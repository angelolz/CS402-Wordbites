import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';

import { ColorSchemes } from '../constants/Constants'
import { moderateScale, showToast } from '../constants/Utils';

const Settings = (props) => {
    const [wordLengthCopy, setWordLengthCopy] = useState(props.wordLength);

    return (
        <Overlay overlayStyle={[styles.overlay, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]} isVisible={props.showSettingsOverlay} onBackdropPress={() => { props.toggleSettingsOverlay(false) }}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Settings</Text>
                <View style={styles.backButton}>
                    <Pressable onPress={() => props.toggleSettingsOverlay(false)}>
                        <Ionicons name="close-outline" size={moderateScale(25)} color={'#f92f60'} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.setting}>
                <View>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Use Dark Theme</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.theme === 'light' ? props.changeTheme('dark') : props.changeTheme('light')}>
                    {
                        props.theme === 'light' ?
                            <Ionicons name="ellipse-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="checkmark-circle-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Toggle Colorblind Mode</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.toggleColorblind(!props.colorblind)}>
                    {
                        props.colorblind ?
                            <Ionicons name="checkmark-circle-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Swap Enter/Delete Keys</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.toggleSwap(!props.swapKeys)}>
                    {
                        props.swapKeys ?
                            <Ionicons name="checkmark-circle-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            <View style={styles.setting}>
                <View>
                    <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Hard Mode</Text>
                    {
                        props.numGuesses != undefined && props.numGuesses > 0 ?
                            <Text style={[styles.settingDescText, { color: 'red' }]}>Disabled during mid-game</Text>
                            : <Text style={[styles.settingDescText, { color: props.theme === 'light' ? ColorSchemes.light.text2Color : ColorSchemes.dark.text2Color }]}>Revealed hints must be used in next guesses</Text>
                    }
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
                            <Ionicons name="checkmark-circle-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} /> :
                            <Ionicons name="ellipse-outline" size={moderateScale(25)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                    }
                </Pressable>
            </View>
            {props.changeWordLength ?
                <View style={styles.setting}>
                    <View>
                        <Text style={[styles.settingTitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Word Length</Text>
                        {
                            props.guesses > 0 ?
                                <Text style={[styles.settingDescText, { color: 'red' }]}>Disabled during mid-game</Text>
                                : null
                        }
                    </View>
                    <Picker
                        selectedValue={wordLengthCopy.toString()}
                        onValueChange={(itemValue, itemIndex) => {
                            if (props.guesses === 0) {
                                props.changeWordLength(itemValue);
                                setWordLengthCopy(itemValue)
                            }
                        }}
                        enabled={props.guesses > 0 ? false : true}
                        mode='dropdown'
                        dropdownIconColor={props.theme === 'light' ? 'black' : (props.guesses > 0 ? 'black' : 'white')}
                        style={[styles.picker, { color: props.theme === 'light' ? 'black' : (props.guesses > 0 ? 'black' : 'white'), backgroundColor: props.guesses > 0 ? '#bfbfbf' : '#00000000' }]}
                    >
                        <Picker.Item label="4" value="4" color={props.theme === 'light' ? 'black' : 'white'} />
                        <Picker.Item label="5" value="5" color={props.theme === 'light' ? 'black' : 'white'} />
                        <Picker.Item label="6" value="6" color={props.theme === 'light' ? 'black' : 'white'} />
                        <Picker.Item label="7" value="7" color={props.theme === 'light' ? 'black' : 'white'} />
                        <Picker.Item label="8" value="8" color={props.theme === 'light' ? 'black' : 'white'} />
                    </Picker>
                </View> : null
            }

            <StatusBar
                backgroundColor={props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </Overlay>
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: moderateScale(300)
    },
    picker: {
        width: '30%',
        textAlign: 'center',
        borderRadius: 10
    },
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
        fontSize: moderateScale(25, 0.25),
        textAlign: 'center',
        paddingHorizontal: 10
    },
    settingTitleText: {
        fontSize: moderateScale(20, 0.25),
    },
    settingDescText: {
        fontSize: moderateScale(12),
    },
    backButton: {
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }
});

export default Settings;