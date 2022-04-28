import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Overlay } from 'react-native-elements'

import { Screen } from '../constants/Constants';

const GameControls = (props) => {
    const [showHomeOverlay, toggleHomeOverlay] = useState(false);

    return (
        <View style={styles.container}>
            <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? 'white' : '#121213' }} isVisible={showHomeOverlay} onBackdropPress={toggleHomeOverlay}>
                <Text>Are you sure you want to leave the game?</Text>
                <Pressable style={styles.button} onPress={() => { props.setView(Screen.MAIN_MENU) }}>
                    <Text style={styles.text}>Yes</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={toggleHomeOverlay}>
                    <Text style={styles.text}>No</Text>
                </Pressable>
            </Overlay>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => { toggleHomeOverlay() }}>
                    <Ionicons name="home-sharp" size={40} color={props.theme === 'light' ? 'black' : 'white'} />
                </Pressable>
                {
                    props.gameState !== "IN_PROGRESS" ?
                        <Pressable onPress={() => { props.toggleResultsOverlay() }}>
                            <Ionicons name="trophy-sharp" size={40} color={props.theme === 'light' ? 'black' : 'white'} />
                        </Pressable> : null
                }
                <Pressable onPress={() => { props.toggleSettingsOverlay(true) }}>
                    <Ionicons name="settings" size={40} color={props.theme === 'light' ? 'black' : 'white'} />
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    button: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "blue",
        paddingVertical: 12,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        letterSpacing: 0.25,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    overlay: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "blue",
        paddingVertical: 12,
        marginBottom: 20,
    },
});
export default GameControls;
