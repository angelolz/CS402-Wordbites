import React, {useState, useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
const { width, height } = Dimensions.get('window');

const Settings = (props) => {

    const [wordLengthCopy, setWordLengthCopy] = useState(props.wordLength);

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
            {props.changeWordLength ?
            <View style={styles.setting}>
                <Text style={[styles.settingScreenText, { color: props.guesses > 0 ? "red": (props.theme === 'light' ? 'black' : 'white') }]}>
                    {props.guesses > 0 ? "Disabled during round": "Word length"}
                </Text>
                <Picker
                    selectedValue={wordLengthCopy.toString()}
                    onValueChange={(itemValue, itemIndex) => {
                        props.changeWordLength(itemValue);
                        setWordLengthCopy(itemValue)
                        setGuessCopy(0);
                    }}
                    enabled={props.guesses > 0 ? false: true}
                    mode="dropdown"
                    dropdownIconColor={props.theme === 'light' ? 'black' : 'white'}
                    style={[styles.picker, {color: props.theme === 'light' ? (props.guesses > 0 ? 'white' : 'black') : 'white' , backgroundColor: props.guesses > 0 ? 'gray' : '#00000000'}]}
                >
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                </Picker>
            </View> : null
            }
            
            <StatusBar
                backgroundColor={props.theme === 'light' ? 'white' : '#121213'}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </Overlay>
    );
};

const styles = StyleSheet.create({
    picker: {
        width: '30%',
        textAlign: 'center'
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