import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, SafeAreaView, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Overlay } from 'react-native-elements'

import Settings from './Settings';
import Keyboard from '../components/Keyboard';
import GameGrid from '../components/GameGrid';
import GameControls from '../components/GameControls';
import { KeyState, ColorSchemes } from '../constants/Constants';
import { showToast, getRatio, moderateScale } from '../constants/Utils';
import { dictionary, commonWords4, commonWords5, commonWords6, commonWords7, commonWords8 } from '../constants/WordList';

const GameBoard = (props) => {
    const [wordLength, setWordLength] = useState(5);
    const [maxGuesses, setMaxGuesses] = useState(6);
    const [numGuesses, incrementGuesses] = useState(0);
    const [guesses, updateGuesses] = useState([]);
    const [word, setWord] = useState(null);
    const [gameState, setGameState] = useState("IN_PROGRESS");
    const [showResultsOverlay, toggleResultsOverlay] = useState(false);
    const [commonWords, setCommonWords] = useState(commonWords5);

    //game state effect
    useEffect(() => {
        if (gameState !== "IN_PROGRESS")
            toggleResultsOverlay(true);
    }, [gameState]);


    //init guesses array
    if (guesses.length == 0) {
        var initArray = [];
        for (var i = 0; i < maxGuesses; i++) {
            var wordArray = [];
            for (var j = 0; j < wordLength; j++) {
                wordArray.push({ key: "", state: KeyState.unused });
            }

            initArray.push({ key: `row_${i}`, wordArray });
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
        var tempWord = [...word];
        const currentGuesses = [...guesses];
        const currentGuess = currentGuesses[numGuesses].wordArray;
        const guess = currentGuess.map((e) => { return e.key; }).join('');

        //if game is no longer in progress, don't check guess
        if (gameState !== "IN_PROGRESS") return false;

        //check if all letters are filled in
        if (guess.length != wordLength) {
            showToast('Not all letters are filled in!', props.theme);
            return false;
        }

        //check if guess is a valid word
        if (!dictionary.includes(guess.toLowerCase())) {
            showToast("That's not a valid word!", props.theme);
            return false;
        }

        //hard mode checks
        if (props.hardMode && numGuesses > 0) {
            const requiredLetters = guesses[numGuesses - 1].wordArray;
            for (var i = 0; i < requiredLetters.length; i++) {
                switch (requiredLetters[i].state) {
                    case KeyState.close:
                        if (guess.indexOf(requiredLetters[i].key) == -1) {
                            showToast(`Your guess must contain ${requiredLetters[i].key}`, props.theme)
                            return false;
                        }
                        break;
                    case KeyState.correct:
                        if (guess.charAt(i) !== requiredLetters[i].key) {
                            showToast(`Letter in position ${i + 1} must be ${requiredLetters[i].key}`, props.theme)
                            return false;
                        }
                        break;
                }
            }
        }

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
        if (guesses[numGuesses].wordArray.every(e => e.state == KeyState.correct)) {
            console.log("you win!");

            var newStats = { ...props.stats };
            newStats[`${wordLength}`].wins++;
            newStats[`${wordLength}`].played++;
            newStats[`${wordLength}`].streak++;

            if (newStats[`${wordLength}`].streak > newStats[`${wordLength}`].top_streak)
                newStats[`${wordLength}`].top_streak = newStats[`${wordLength}`].streak;

            props.updateStats(newStats);
            setGameState("WON");
        }

        else if (numGuesses + 1 == maxGuesses) {
            console.log("loser lmfao");

            var newStats = { ...props.stats };
            newStats[`${wordLength}`].played++;
            newStats[`${wordLength}`].streak = 0;

            props.updateStats(newStats);
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

    function winText() {
        return (
            <>
                <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>You Won!</Text>
                <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>You got it in {numGuesses} {numGuesses == 1 ? 'try' : 'tries'}!</Text>
            </>
        )
    }

    function loseText() {
        return (
            <>
                <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>You Lost!</Text>
                <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor, }]}>You'll get it next time!</Text>
            </>
        )
    }

    const changeWordLength = (newLength) => {
        const length = parseInt(newLength);
        setWordLength(length);
        switch (length) {
            case 4:
                setCommonWords([...commonWords4]);
                break;
            case 5:
                setCommonWords([...commonWords5]);
                break;
            case 6:
                setCommonWords([...commonWords6]);
                break;
            case 7:
                setCommonWords([...commonWords7]);
                break;
            case 8:
                setCommonWords([...commonWords8]);
                break;
        }

        resetGame();
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]}>
            {props.showSettingsOverlay ?
                <Settings
                    toggleSettingsOverlay={props.toggleSettingsOverlay}
                    numGuesses={numGuesses}
                    hardMode={props.hardMode}
                    toggleHardMode={props.toggleHardMode}
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                    colorblind={props.colorblind}
                    toggleColorblind={props.toggleColorblind}
                    swapKeys={props.swapKeys}
                    toggleSwap={props.toggleSwap}
                    changeWordLength={changeWordLength}
                    wordLength={wordLength}
                    guesses={numGuesses}
                /> : null
            }
            <Overlay
                overlayStyle={[styles.overlay, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]}
                isVisible={showResultsOverlay}
                onBackdropPress={toggleResultsOverlay}
            >
                {gameState === "WON" ? winText() : loseText()}
                <View style={styles.stats}>
                    <Text style={[styles.titleText, , { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{wordLength}-Letter Stats</Text>
                    <View style={styles.statRow}>
                        <View style={styles.stat}>
                            <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Wins</Text>
                            <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{props.stats[`${wordLength}`].wins}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Losses</Text>
                            <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{props.stats[`${wordLength}`].played - props.stats[`${wordLength}`].wins}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Ratio</Text>
                            <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{getRatio(props.stats[`${wordLength}`])}</Text>
                        </View>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.stat}>
                            <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Streak</Text>
                            <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{props.stats[`${wordLength}`].streak}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={[styles.titleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Top Streak</Text>
                            <Text style={[styles.subtitleText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>{props.stats[`${wordLength}`].top_streak}</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={styles.menuButton} onPress={() => { resetGame(); toggleResultsOverlay(false) }}>
                    <Ionicons name="play" size={moderateScale(20)} color={'white'} />
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
                backgroundColor={props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-between',
    },
    overlay: {
        width: moderateScale(300, .35)
    },
    stats: {
        marginVertical: 10,
    },
    stat: {
        textAlign: 'center'
    },
    statRow: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleText: {
        fontSize: moderateScale(22, 0.10),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitleText: {
        textAlign: 'center',
        fontSize: moderateScale(18, .25)
    },
    menuButton: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 8,
        backgroundColor: "#4bb84b",
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(20, .25),
        textAlign: 'center',
    }
});

export default GameBoard;