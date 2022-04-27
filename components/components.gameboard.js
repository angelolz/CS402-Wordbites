import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import Keyboard from './components.keyboard';
import GameGrid from './components.gamegrid';

const GameBoard = () => {
    const [wordLength, setWordLength] = useState(4);
    const [guesses, setGuesses] = useState(6);

    return (
        <View style={styles.container}>
            <GameGrid
                wordLength={wordLength}
                maxGuesses={guesses}
            />
            <Keyboard />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
});

export default GameBoard;