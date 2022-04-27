import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import GameGrid from './components.gamegrid';
import keyState from '../constants/keyState';

var allKeys = [
    { key: 'Q', state: keyState.unused },
    { key: 'W', state: keyState.unused },
    { key: 'E', state: keyState.unused },
    { key: 'R', state: keyState.unused },
    { key: 'T', state: keyState.unused },
    { key: 'Y', state: keyState.unused },
    { key: 'U', state: keyState.unused },
    { key: 'I', state: keyState.unused },
    { key: 'O', state: keyState.unused },
    { key: 'P', state: keyState.unused },
    { key: 'A', state: keyState.unused },
    { key: 'S', state: keyState.unused },
    { key: 'D', state: keyState.unused },
    { key: 'F', state: keyState.unused },
    { key: 'G', state: keyState.unused },
    { key: 'H', state: keyState.unused },
    { key: 'J', state: keyState.unused },
    { key: 'K', state: keyState.unused },
    { key: 'L', state: keyState.unused },
    { key: 'Z', state: keyState.unused },
    { key: 'X', state: keyState.unused },
    { key: 'C', state: keyState.unused },
    { key: 'V', state: keyState.unused },
    { key: 'B', state: keyState.unused },
    { key: 'N', state: keyState.unused },
    { key: 'M', state: keyState.unused },
];

const Keyboard = (props) => {

    const [keys, updateKeys] = useState(allKeys);
    const [letterIndex, changeIndex] = useState(-1);

    useEffect(() => {
        let newKeys = [...keys];
        if(props.numGuesses > 0) {
            props.guesses[props.numGuesses - 1].map((e) => {
                newKeys[newKeys.findIndex((findKey) => findKey.key === e.key)].state = e.state
            });
            updateKeys(newKeys);
        }
    }, [props.numGuesses]);

    function logKey(pressedKey) {
        var guesses = [...props.guesses];
        var currentGuess = guesses[props.numGuesses];

        if (props.gameState !== "IN_PROGRESS") return;

        if (pressedKey.key === "erase") {
            if (letterIndex >= 0) {
                currentGuess[letterIndex].key = "";
                changeIndex(letterIndex - 1);
                props.updateGuesses(guesses);
            }
        }

        else {
            if (letterIndex < props.wordLength - 1) {
                const curIndex = letterIndex + 1;
                currentGuess[curIndex].key = pressedKey.key
                changeIndex(curIndex)
                props.updateGuesses(guesses);
            }

            else {
                console.log("word full")
            }
        }
    }

    const key = (keyboardKey) => {
        let bgColor;
        switch (keyboardKey.state) {
            case keyState.unused:
                bgColor = '#EDF2EE';
                break;
            case keyState.wrong:
                bgColor = '#404140';
                break;
            case keyState.close:
                bgColor = '#b9a539';
                break;
            case keyState.correct:
                bgColor = '#55a24c';
                break;
        }
        return (
            <TouchableOpacity onPress={() => logKey(keyboardKey)} style={[styles.key, { backgroundColor: bgColor }]} key={keyboardKey.key}>
                <Text style={styles.text}>{keyboardKey.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.keyrow}>
                {key(keys[0])}
                {key(keys[1])}
                {key(keys[2])}
                {key(keys[3])}
                {key(keys[4])}
                {key(keys[5])}
                {key(keys[6])}
                {key(keys[7])}
                {key(keys[8])}
                {key(keys[9])}
            </View>
            <View style={styles.keyrow}>
                <View style={{ flex: 0.5, margin: 2 }}></View>
                {key(keys[10])}
                {key(keys[11])}
                {key(keys[12])}
                {key(keys[13])}
                {key(keys[14])}
                {key(keys[15])}
                {key(keys[16])}
                {key(keys[17])}
                {key(keys[18])}
                <View style={{ flex: 0.5, margin: 2 }}></View>
            </View>
            <View style={styles.keyrow}>
                <TouchableOpacity onPress={() => { if (props.checkGuess()) changeIndex(-1) }} style={[styles.key, { backgroundColor: '#10D445', flex: 1.5 }]} key='enter'>
                    <Text style={styles.text}>ENT</Text>
                </TouchableOpacity>
                {key(keys[19])}
                {key(keys[20])}
                {key(keys[21])}
                {key(keys[22])}
                {key(keys[23])}
                {key(keys[24])}
                {key(keys[25])}
                <TouchableOpacity onPress={() => logKey({ key: "erase" })} style={[styles.key, { backgroundColor: '#10D445', flex: 1.5 }]} key='erase'>
                    <Text style={styles.text}>ERS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 5,
    },
    keyrow: {
        flexDirection: 'row',
    },
    key: {
        flex: 1,
        margin: 2,
        height: ((width > height) ? width / 12 : height / 12),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    text: {
        fontWeight: "bold",
        fontSize: ((width > height) ? width / 12 : height / 48)
    }
});

export default Keyboard;