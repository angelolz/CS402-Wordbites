import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import Keyboard from './components.keyboard';
import GameGrid from './components.gamegrid';
import keyState from '../constants/keyState';
import { dictionary, commonWords } from '../constants/wordList';


const GameBoard = () => {
    const [wordLength, setWordLength] = useState(5);
    const [maxGuesses, setMaxGuesses] = useState(6);
    const [numGuesses, incrementGuesses] = useState(0);
    const [guesses, updateGuesses] = useState([]);
    const [word, setWord] = useState(null);
    const [gameState, setGameState] = useState("IN_PROGRESS");

    //init guesses array
    if (guesses.length == 0) {
        var initArray = [];
        for (var i = 0; i < maxGuesses; i++) {
            var wordArray = [];
            for (var j = 0; j < wordLength; j++) {
                wordArray.push({ key: "", state: keyState.unused });
            }

            initArray.push(wordArray);
        }

        updateGuesses(initArray)
    }

    //init word
    if (word == null) {
        var filteredWords = commonWords.filter(e => e.length === wordLength)
        var chosenWord = filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase();
        console.log(`the chosen word is: ${chosenWord}`);
        setWord(chosenWord);
    }

    function checkGuess() {
        var currentGuesses = [...guesses];
        var currentGuess = currentGuesses[numGuesses];

        if (gameState !== "IN_PROGRESS") return false;

        if (!guesses[numGuesses].every((e) => e.key !== "")) {
            console.log("not all letters filled")
            return false;
        }

        var guess = currentGuess.map((e) => { return e.key; }).join("");
        if (!dictionary.includes(guess.toLowerCase())) {
            console.log("not a valid word");
            return false;
        }

        var tempWord = [...word];
        for (var i = 0; i < word.length; i++) {
            if (tempWord[i] === currentGuess[i].key) {
                currentGuess[i].state = keyState.correct;
                tempWord[i] = "_"
            }
        }

        for (var i = 0; i < word.length; i++) {
            if (currentGuess[i].state === keyState.correct)
                continue;

            const index = tempWord.findIndex((e) => e === currentGuess[i].key)
            if (index > -1) {
                currentGuess[i].state = keyState.close;
                tempWord[index] = "_";
            }

            else
                currentGuess[i].state = keyState.wrong;
        }

        console.log(currentGuesses);
        updateGuesses(currentGuesses);
        incrementGuesses(numGuesses + 1);

        //check if win or lose
        if (guesses[numGuesses].every(e => e.state == keyState.correct)) {
            console.log("you win!")
            setGameState("WIN")
        }

        else if (numGuesses + 1 == maxGuesses) {
            console.log("loser lmfao")
            setGameState("LOSE");
        }

        //return true if valid guess
        return true;
    }

    return (
        <View style={styles.container}>
            <GameGrid
                wordLength={wordLength}
                maxGuesses={maxGuesses}
                guesses={guesses}
            />
            <Keyboard
                wordLength={wordLength}
                numGuesses={numGuesses}
                guesses={guesses}
                updateGuesses={updateGuesses}
                incrementGuesses={incrementGuesses}
                checkGuess={checkGuess}
                gameState={gameState}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
});

export default GameBoard;