import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const GameGridComponent = (props) => {
    const [wordLength, setWordLength] = useState(5);
    const [guesses, setGuesses] = useState(6);

    const row = () => {
        var box;
        for (var i = 0; i < wordLength; i++) {
            box += <View style={styles.box}>
                {/* <Text>i</Text> */}
            </View>
        }

        return box;
    }

    const grid = () => {
        var rows;
        for (var i = 0; i < guesses; i++) {
            rows += row()
        }

        return rows;
    }


    return (
        <View style={styles.container}>
            {grid()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 5
    },
    box: {
        borderColor: "black",
        borderWidth: 5,
        color: "black",
        padding: 10
    }
});

export default GameGridComponent;