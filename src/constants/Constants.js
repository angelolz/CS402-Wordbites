import { StyleSheet } from 'react-native';

const ColorSchemes = Object.freeze({
    light: {
        bgColor: 'white',
        toneColor: '#d3d6da',
        tone2Color: '#d3d6da',
        textColor: 'black'
    },
    dark: {
        bgColor: '#121213',
        toneColor: '#3a3a3c',
        tone2Color: '#818384',
        textColor: 'white'
    }
});

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

module.exports = { KeyState, StateColor, Screen, ColorSchemes, SharedStyles }