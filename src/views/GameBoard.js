import React, { useState, useEffect } from 'react';
import Toast from 'react-native-root-toast';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Overlay } from 'react-native-elements'

import Settings from './Settings';
import Keyboard from '../components/Keyboard';
import GameGrid from '../components/GameGrid';
import GameControls from '../components/GameControls';
import { KeyState } from '../constants/Constants';
import { dictionary, commonWords } from '../constants/WordList';

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
        if (gameState === "WON")
            toggleResultsOverlay(true);
        else if (gameState == "LOST")
            toggleResultsOverlay(true)
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
            Toast.show('Not all letters are filled in!', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                animation: true,
                shadow: true,
                hideOnPress: true,
                backgroundColor: props.theme === 'light' ? 'black' : 'white',
                textColor: props.theme === 'light' ? 'white' : 'black'
            })
            return false;
        }

        var guess = currentGuess.map((e) => { return e.key; }).join("");
        if (!dictionary.includes(guess.toLowerCase())) {
            Toast.show("That's not a valid word!", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                animation: true,
                shadow: true,
                hideOnPress: true,
                backgroundColor: props.theme === 'light' ? 'black' : 'white',
                textColor: props.theme === 'light' ? 'white' : 'black'
            })
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
        <SafeAreaView style={[styles.container, { backgroundColor: props.theme === 'light' ? 'white' : '#121213' }]}>
            {props.showSettingsOverlay ?
                <Settings
                    toggleSettingsOverlay={props.toggleSettingsOverlay}
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                    colorblind={props.colorblind}
                    toggleColorblind={props.toggleColorblind}
                    swapKeys={props.swapKeys}
                    toggleSwap={props.toggleSwap}
                /> : null
            }
            <Overlay overlayStyle={{ backgroundColor: props.theme === 'light' ? 'white' : '#121213', width: '75%' }} isVisible={showResultsOverlay} onBackdropPress={toggleResultsOverlay}>
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
                theme={props.theme}
            />
            <GameGrid
                wordLength={wordLength}
                maxGuesses={maxGuesses}
                guesses={guesses}
                theme={props.theme}
                colorblind={props.colorblind}
            />
            <Keyboard
                wordLength={wordLength}
                numGuesses={numGuesses}
                guesses={guesses}
                updateGuesses={updateGuesses}
                incrementGuesses={incrementGuesses}
                checkGuess={checkGuess}
                gameState={gameState}
                theme={props.theme}
                colorblind={props.colorblind}
                swapKeys={props.swapKeys}
            />
            <StatusBar
                backgroundColor={props.theme === 'light' ? 'white' : '#121213'}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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