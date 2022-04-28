import React, { useState } from 'react';
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
            <Pressable style={styles.button} onPress={() => { toggleHomeOverlay() }}>
                <Text style={styles.text}>Home</Text>
            </Pressable>
            {
                props.gameState !== "IN_PROGRESS" ?
                    <Pressable style={styles.button} onPress={() => { props.toggleResultsOverlay() }}>
                        <Text style={styles.text}>Results</Text>
                    </Pressable> : null
            }
            <Pressable style={styles.button} onPress={() => { props.toggleSettingsOverlay(true) }}>
                <Text style={styles.text}>Settings</Text>
            </Pressable>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        // width: "90%",
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
