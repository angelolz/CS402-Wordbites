import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var allKeys = [
    {key: 'Q', disabled: false},
    {key: 'W', disabled: false},
    {key: 'E', disabled: false},
    {key: 'R', disabled: false},
    {key: 'T', disabled: false},
    {key: 'Y', disabled: false},
    {key: 'U', disabled: false},
    {key: 'I', disabled: false},
    {key: 'O', disabled: false},
    {key: 'P', disabled: false},
    {key: 'A', disabled: false},
    {key: 'S', disabled: false},
    {key: 'D', disabled: false},
    {key: 'F', disabled: false},
    {key: 'G', disabled: false},
    {key: 'H', disabled: false},
    {key: 'J', disabled: false},
    {key: 'K', disabled: false},
    {key: 'L', disabled: false},
    {key: 'Z', disabled: false},
    {key: 'X', disabled: false},
    {key: 'C', disabled: false},
    {key: 'V', disabled: false},
    {key: 'B', disabled: false},
    {key: 'N', disabled: false},
    {key: 'M', disabled: false},
];

const KeyboardComponent = (props) => {

    const[keys, updateKeys] = useState(allKeys);
    

    function logKey(pressedKey){
        const newKeyStates = keys.map((curKey) => {
            if(curKey.key === pressedKey.key){
                curKey.disabled = !curKey.disabled;
            }
            return curKey;
        });

        updateKeys(newKeyStates);
    }

    const key = (keyboardKey) => {
        const bgColor = keyboardKey.disabled ? '#00FF00' : '#FF0000';
        return (
            <TouchableOpacity onPress={() => logKey(keyboardKey)} style={[styles.key, {backgroundColor: bgColor}]} key={keyboardKey.key}>
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
        flex: 0.5,
        padding: 10,
    },
    keyrow: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    key: {
        padding: 10,
        margin: 2
    }
});

export default KeyboardComponent;