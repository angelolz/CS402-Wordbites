import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
                curKey.disabled = true;
            }
            return curKey;
        });

        updateKeys(newKeyStates);
    }

    var keyboard = 
    <View style={styles.container}>
        <View style={styles.keyrow}>
            {
            keys.map((keyboardKey) => {
                const bgColor = keyboardKey.disabled ? '#00FF00' : '#FF0000';
                return (
                    <TouchableOpacity onPress={() => logKey(keyboardKey)} style={[styles.key, {backgroundColor: bgColor}]} key={keyboardKey.key}>
                        <Text>{keyboardKey.key}</Text>
                    </TouchableOpacity>
                );
            })
            }
        </View>
    </View>;
    return keyboard;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    keyrow: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    key: {
        padding: 15,
        margin: 5
    }
});

export default KeyboardComponent;