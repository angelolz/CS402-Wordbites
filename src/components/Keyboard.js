import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { KeyState, StateColor } from '../constants/Constants';

var allKeys = [
    { key: 'Q', state: KeyState.unused },
    { key: 'W', state: KeyState.unused },
    { key: 'E', state: KeyState.unused },
    { key: 'R', state: KeyState.unused },
    { key: 'T', state: KeyState.unused },
    { key: 'Y', state: KeyState.unused },
    { key: 'U', state: KeyState.unused },
    { key: 'I', state: KeyState.unused },
    { key: 'O', state: KeyState.unused },
    { key: 'P', state: KeyState.unused },
    { key: 'A', state: KeyState.unused },
    { key: 'S', state: KeyState.unused },
    { key: 'D', state: KeyState.unused },
    { key: 'F', state: KeyState.unused },
    { key: 'G', state: KeyState.unused },
    { key: 'H', state: KeyState.unused },
    { key: 'J', state: KeyState.unused },
    { key: 'K', state: KeyState.unused },
    { key: 'L', state: KeyState.unused },
    { key: 'Z', state: KeyState.unused },
    { key: 'X', state: KeyState.unused },
    { key: 'C', state: KeyState.unused },
    { key: 'V', state: KeyState.unused },
    { key: 'B', state: KeyState.unused },
    { key: 'N', state: KeyState.unused },
    { key: 'M', state: KeyState.unused },
];

const Keyboard = (props) => {

    const [keys, updateKeys] = useState(allKeys);
    const [letterIndex, changeIndex] = useState(-1);

    useEffect(() => {
        let newKeys = [...keys];
        if (props.numGuesses > 0) {
            props.guesses[props.numGuesses - 1].map((e) => {
                const foundKey = newKeys[newKeys.findIndex((findKey) => findKey.key === e.key)]
                if (foundKey.state < e.state)
                    foundKey.state = e.state;
            });
            updateKeys(newKeys);
        }

        else {
            let cleanKeys = [...allKeys]

            cleanKeys.map(e => {
                e.state = KeyState.unused;
            })
            updateKeys(cleanKeys)
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
            case KeyState.unused:
                bgColor = props.theme === "light" ? '#d3d6da' : '#818384';
                textColor = props.theme === "light" ? 'black' : 'white';
                break;
            case KeyState.wrong:
                bgColor = StateColor.wrong
                textColor = 'white';
                break;
            case KeyState.close:
                bgColor = props.colorblind ? StateColor.cb_close : StateColor.reg_close;
                textColor = 'white';
                break;
            case KeyState.correct:
                bgColor = props.colorblind ? StateColor.reg_correct : StateColor.reg_correct
                textColor = 'white';
                break;
        }
        return (
            <TouchableOpacity onPress={() => logKey(keyboardKey)} style={[styles.key, { backgroundColor: bgColor }]} key={keyboardKey.key}>
                <Text style={[styles.text, { color: textColor }]}>{keyboardKey.key}</Text>
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
                <TouchableOpacity
                    onPress={() => { if (props.checkGuess()) changeIndex(-1) }}
                    style={[styles.key, { backgroundColor: props.theme === "light" ? '#d3d6da' : '#818384', flex: 1.5 }]}
                    key='enter'
                >
                    <Text style={[styles.text, { color: props.theme === "light" ? 'black' : 'white' }]}>ENT</Text>
                </TouchableOpacity>
                {key(keys[19])}
                {key(keys[20])}
                {key(keys[21])}
                {key(keys[22])}
                {key(keys[23])}
                {key(keys[24])}
                {key(keys[25])}
                <TouchableOpacity
                    onPress={() => logKey({ key: "erase" })}
                    style={[styles.key, { backgroundColor: props.theme === "light" ? '#d3d6da' : '#818384', flex: 1.5 }]}
                    key='erase'
                >
                    <Text style={[styles.text, { color: props.theme === "light" ? 'black' : 'white' }]}>ERS</Text>
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