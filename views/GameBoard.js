import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { Overlay } from 'react-native-elements'

import Keyboard from '../components/Keyboard';
import GameGrid from '../components/GameGrid';
import GameControls from '../components/GameControls';
import KeyState from '../constants/KeyState';
import Settings from './Settings';
import { dictionary, commonWords } from '../constants/wordList';

const GameBoard = (props) => {
    const [wordLength, setWordLength] = useState(5);
    const [maxGuesses, setMaxGuesses] = useState(6);
    const [numGuesses, incrementGuesses] = useState(0);
    const [guesses, updateGuesses] = useState([]);
    const [word, setWord] = useState(null);
    const [gameState, setGameState] = useState("IN_PROGRESS");
    const [showResultsOverlay, toggleResultsOverlay] = useState(false);

    //game state effect
    useEffect(() => {
        if (gameState === "WON") {
            console.log("YOU WIN!!!!")
            toggleResultsOverlay(true);
        }

        else if (gameState == "LOST") {
            console.log("OMEGA LOSER")
            toggleResultsOverlay(true)
        }
    }, [gameState]);


    //init guesses array
    if (guesses.length == 0) {
        var initArray = [];
        for (var i = 0; i < maxGuesses; i++) {
            var wordArray = [];
            for (var j = 0; j < wordLength; j++) {
                wordArray.push({ key: "", state: KeyState.unused });
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
                currentGuess[i].state = KeyState.correct;
                tempWord[i] = "_"
            }
        }

        for (var i = 0; i < word.length; i++) {
            if (currentGuess[i].state === KeyState.correct)
                continue;

            const index = tempWord.findIndex((e) => e === currentGuess[i].key)
            if (index > -1) {
                currentGuess[i].state = KeyState.close;
                tempWord[index] = "_";
            }

            else
                currentGuess[i].state = KeyState.wrong;
        }
        updateGuesses(currentGuesses);
        incrementGuesses(numGuesses + 1);

        //check if win or lose
        if (guesses[numGuesses].every(e => e.state == KeyState.correct)) {
            console.log("you win!")
            setGameState("WON")
        }

        else if (numGuesses + 1 == maxGuesses) {
            console.log("loser lmfao")
            setGameState("LOST");
        }

        //return true if valid guess
        return true;
    }

    function resetGame() {
        setWord(null);
        updateGuesses([]);
        incrementGuesses(0);
        setGameState("IN_PROGRESS")
    }

    return (
        <View style={styles.container}>
            {props.showSettingsOverlay ?
                <Settings
                    toggleSettingsOverlay={props.toggleSettingsOverlay}
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                /> : null
            }
            <Overlay style={styles.overlay} isVisible={showResultsOverlay} onBackdropPress={toggleResultsOverlay}>
                <Text>{gameState === "WON" ? "You Won!" : "You lost! loser lol"}</Text>
                <Pressable style={styles.button} onPress={() => { resetGame(); toggleResultsOverlay(false) }}>
                    <Text style={styles.text}>Play Again?</Text>
                </Pressable>
            </Overlay>
            <GameControls
                setView={props.setView}
                gameState={gameState}
                toggleResultsOverlay={toggleResultsOverlay}
                toggleSettingsOverlay={props.toggleSettingsOverlay}
            />
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
        flexDirection: 'column',
        alignContent: 'space-between',
    },
    overlay: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "blue",
        paddingVertical: 12,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        letterSpacing: 0.25,
        fontWeight: 'bold',
        textTransform: "uppercase"
    }
});

export default GameBoard;