import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const keyState = Object.freeze({
    unused: 1,
    wrong: 0,
    close: 2,
    correct: 3
});

var allKeys = [
    {key: 'Q', state: keyState.unused},
    {key: 'W', state: keyState.unused},
    {key: 'E', state: keyState.unused},
    {key: 'R', state: keyState.unused},
    {key: 'T', state: keyState.unused},
    {key: 'Y', state: keyState.unused},
    {key: 'U', state: keyState.unused},
    {key: 'I', state: keyState.unused},
    {key: 'O', state: keyState.unused},
    {key: 'P', state: keyState.unused},
    {key: 'A', state: keyState.unused},
    {key: 'S', state: keyState.unused},
    {key: 'D', state: keyState.unused},
    {key: 'F', state: keyState.unused},
    {key: 'G', state: keyState.unused},
    {key: 'H', state: keyState.unused},
    {key: 'J', state: keyState.unused},
    {key: 'K', state: keyState.unused},
    {key: 'L', state: keyState.unused},
    {key: 'Z', state: keyState.unused},
    {key: 'X', state: keyState.unused},
    {key: 'C', state: keyState.unused},
    {key: 'V', state: keyState.unused},
    {key: 'B', state: keyState.unused},
    {key: 'N', state: keyState.unused},
    {key: 'M', state: keyState.unused},
];

const KeyboardComponent = (props) => {

    const[keys, updateKeys] = useState(allKeys);

    function logKey(pressedKey){
        const newKeyStates = keys.map((curKey) => {
            if(curKey.key === pressedKey.key){
                curKey.state = keyState.wrong;
            }
            return curKey;
        });

        updateKeys(newKeyStates);
    }

    const key = (keyboardKey) => {
        let bgColor;
        switch(keyboardKey.state) {
            case keyState.unused:
                bgColor = '#EDF2EE';
                break;
            case keyState.wrong:
                bgColor = '#404140';
                break;
            case keyState.close:
                bgColor = '#E9E546';
                break;
            case keyState.correct:
                bgColor = '#10D445';
                break;
        }
        return (
            <TouchableOpacity onPress={() => logKey(keyboardKey)} style={[styles.key, {backgroundColor: bgColor}]} key={keyboardKey.key} disabled={(keyboardKey.state !== keyState.unused)}>
                <Text>{keyboardKey.key}</Text>
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
                {key(keys[10])}
                {key(keys[11])}
                {key(keys[12])}
                {key(keys[13])}
                {key(keys[14])}
                {key(keys[15])}
                {key(keys[16])}
                {key(keys[17])}
                {key(keys[18])}
            </View>
            <View style={styles.keyrow}>
                {key(keys[19])}
                {key(keys[20])}
                {key(keys[21])}
                {key(keys[22])}
                {key(keys[23])}
                {key(keys[24])}
                {key(keys[25])}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    keyrow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    key: {
        margin: 2,
        paddingHorizontal: ((width > height) ? width / 25 : height / 65),
        paddingVertical: ((width > height) ? height / 25 : width / 50)
    }
});

export default KeyboardComponent;