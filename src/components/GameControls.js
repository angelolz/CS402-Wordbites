import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Overlay } from 'react-native-elements'

import { Screen, ColorSchemes } from '../constants/Constants';
import { moderateScale } from '../constants/Utils';

const GameControls = (props) => {
    const [showHomeOverlay, toggleHomeOverlay] = useState(false);

    return (
        <View style={[styles.container, { borderColor: props.theme === 'light' ? 'black' : 'white' }]}>
            <Overlay
                overlayStyle={[styles.overlay, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]}
                isVisible={showHomeOverlay}
                onBackdropPress={toggleHomeOverlay}
            >
                <Text style={[styles.header, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Are you sure you want to leave the game?</Text>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={() => { props.setView(Screen.MAIN_MENU) }}>
                        <Ionicons style={[styles.exitIcons, { backgroundColor: '#4bb84b' }]} name="checkmark-outline" size={moderateScale(35)} color={'white'} />
                    </Pressable>
                    <Pressable style={styles.button} onPress={toggleHomeOverlay}>
                        <Ionicons style={[styles.exitIcons, { backgroundColor: '#f92f60' }]} name="close-outline" size={moderateScale(35)} color={'white'} />
                    </Pressable>
                </View>
            </Overlay>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => { toggleHomeOverlay() }}>
                    <Ionicons name="home-sharp" size={moderateScale(35)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                </Pressable>
                {
                    props.gameState !== "IN_PROGRESS" ?
                        <Pressable onPress={() => { props.toggleResultsOverlay() }}>
                            <Ionicons name="trophy-sharp" size={moderateScale(35)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                        </Pressable> : null
                }
                <Pressable onPress={() => { props.toggleSettingsOverlay(true) }}>
                    <Ionicons name="settings" size={moderateScale(35)} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    overlay: {
        width: moderateScale(300, .25),
    },
    container: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderBottomWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    exitIcons: {
        borderRadius: 5,
        textAlign: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: moderateScale(20, 0.35),
        textAlign: 'center',
        marginVertical: 15
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        padding: 10,
        paddingVertical: 12,
        marginBottom: 20,
    },
});

export default GameControls;