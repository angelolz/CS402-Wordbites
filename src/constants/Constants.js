import { StyleSheet } from 'react-native';

const SharedStyles = StyleSheet.create({});

const KeyState = Object.freeze({
    unused: 0,
    wrong: 1,
    close: 2,
    correct: 3
});

const StateColor = Object.freeze({
    wrong: '#3a3a3c',
    reg_close: '#b9a539',
    reg_correct: '#55a24c',
    cb_close: '#82c3ff',
    cb_correct: '#ea6929'
})

const Screen = Object.freeze({
    MAIN_MENU: 0,
    GAME: 1,
    STATS: 2,
    ACCOUNT: 3
});

module.exports = { KeyState, StateColor, Screen, SharedStyles }