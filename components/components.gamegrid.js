import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const GameGridComponent = (props) => {
    const [wordLength, setWordLength] = useState(5);
    const [guesses, setGuesses] = useState(6);

    const boxes = (rowNum) => {
        let box = [];

        for(let i = 0; i < wordLength; i++){
            box.push(
                <View key={`${rowNum}:${i}`} style={styles.box}>
                    <Text>i</Text>
                </View>
            );
        }

        return box;
    }

    const rows = () => {
        let row = [];

        for(let i = 0; i < guesses; i++){
            row.push(
                <View key={`${i}`} style={styles.row}>
                    {boxes(i)}
                </View>
            );
        }

        return row;
    }

    return (
        <View style={styles.container}>
            {rows()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    box: {
        borderColor: "black",
        borderWidth: 5,
        color: "black",
        padding: 10

    }
});

export default GameGridComponent;