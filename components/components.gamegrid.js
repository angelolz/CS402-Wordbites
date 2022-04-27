import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const GameGrid = (props) => {
    const boxes = (rowNum) => {
        let box = [];

        for (let i = 0; i < props.wordLength; i++) {
            box.push(
                <View key={`${rowNum}:${i}`} style={styles.box}>
                    <Text style={styles.text} adjustsFontSizeToFit={true}>
                        {props.guesses[rowNum].charAt(i)}
                    </Text>
                </View>
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