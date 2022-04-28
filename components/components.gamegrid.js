import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import keyState from '../constants/keyState';

const GameGrid = (props) => {
    const boxItem = (rowNum, i) => {
        let bgColor;
        let textColor;
        switch (props.guesses[rowNum][i].state) {
            case keyState.unused:
                bgColor = '#EDF2EE';
                textColor = '#000000';
                break;
            case keyState.wrong:
                bgColor = '#404140';
                textColor = '#FFFFFF';
                break;
            case keyState.close:
                bgColor = '#b9a539';
                textColor = '#FFFFFF';
                break;
            case keyState.correct:
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

        for (let i = 0; i < props.wordLength; i++) {
            box.push(
                boxItem(rowNum, i)
                // <View key={`${rowNum}:${i}`} style={styles.box}>
                //     <Text style={styles.text} adjustsFontSizeToFit={true}>
                //         {props.guesses[rowNum][i].key}
                //     </Text>
                // </View>
            );
        }

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
        paddingHorizontal: 2
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        color: "black",
        margin: 2,
    },

    text: {
        fontSize: 100
    }
});

export default GameGrid;