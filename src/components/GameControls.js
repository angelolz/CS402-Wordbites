import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Overlay } from 'react-native-elements'

import { Screen } from '../constants/Constants';

const GameControls = (props) => {
    const [showHomeOverlay, toggleHomeOverlay] = useState(false);

    return (
        <View style={styles.container}>
            <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? 'white' : '#121213', width: '75%' }} isVisible={showHomeOverlay} onBackdropPress={toggleHomeOverlay}>
                <Text style={[styles.header, { color: props.theme === 'light' ? 'black' : 'white' }]}>Are you sure you want to leave the game?</Text>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={() => { props.setView(Screen.MAIN_MENU) }}>
                        <Ionicons style={{ backgroundColor: '#4bb84b', borderRadius: 5, textAlign: 'center' }} name="checkmark-outline" size={42} color={'white'} />
                    </Pressable>
                    <Pressable style={styles.button} onPress={toggleHomeOverlay}>
                        <Ionicons style={{ backgroundColor: '#f92f60', borderRadius: 5, textAlign: 'center' }} name="close-outline" size={42} color={'white'} />
                    </Pressable>
                </View>
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
    header: {
        fontWeight: 'bold',
        fontSize: 24,
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
    overlay: {
        flex: 1,
        flexDirection: 'column'
    },
});
export default GameControls;
