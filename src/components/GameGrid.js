import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { KeyState, StateColor } from '../constants/Constants';

const GameGrid = (props) => {
    const boxItem = (rowNum, i) => {
        let bgColor;
        let textColor;
        let borderColor = props.theme === 'light' ? '#d3d6da' : '#3a3a3c';
        switch (props.guesses[rowNum][i].state) {
            case KeyState.unused:
                bgColor = 'rgba(0,0,0,0)';
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
                bgColor = props.colorblind ? StateColor.cb_correct : StateColor.reg_correct
                textColor = 'white';
                break;
        }

        return (
            <View key={`${rowNum}:${i}`} style={[styles.box, { backgroundColor: bgColor, borderColor: borderColor }]}>
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
        flex: 1,
        paddingHorizontal: 2,
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderWidth: 3,
        borderRadius: 5,
        margin: 2,
        overflow: 'hidden'
    },

    text: { fontSize: 100 }
});

export default GameGrid;