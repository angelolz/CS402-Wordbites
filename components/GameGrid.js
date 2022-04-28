import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import KeyState from '../constants/KeyState';

const GameGrid = (props) => {
    const boxItem = (rowNum, i) => {
        let bgColor;
        let textColor;
        switch (props.guesses[rowNum][i].state) {
            case KeyState.unused:
                bgColor = '#EDF2EE';
                textColor = '#000000';
                break;
            case KeyState.wrong:
                bgColor = '#404140';
                textColor = '#FFFFFF';
                break;
            case KeyState.close:
                bgColor = '#b9a539';
                textColor = '#FFFFFF';
                break;
            case KeyState.correct:
                bgColor = '#55a24c';
                textColor = '#FFFFFF';
                break;
        }
        return (
            <View key={`${rowNum}:${i}`} style={[styles.box, { backgroundColor: bgColor }]}>
                <Text style={[styles.text, { color: textColor }]} adjustsFontSizeToFit={true}>
                    {props.guesses[rowNum][i].key}
                </Text>
            </View>
        );
    };

    const boxes = (rowNum) => {
        let box = [];

        for (let i = 0; i < props.wordLength; i++)
            box.push(boxItem(rowNum, i));

        return box;
    }

    const rows = () => {
        let row = [];

        for (let i = 0; i < props.maxGuesses; i++) {
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
        flexShrink: 1,
        paddingHorizontal: 2
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        color: "black",
        margin: 2,
    },

    text: { fontSize: 100 }
});

export default GameGrid;