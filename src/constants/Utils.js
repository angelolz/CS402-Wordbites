import Toast from 'react-native-root-toast';

function showToast(text, theme) {
    Toast.show(text, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        animation: true,
        shadow: true,
        hideOnPress: true,
        backgroundColor: theme === 'light' ? 'black' : 'white',
        textColor: theme === 'light' ? 'white' : 'black'
    })
}

module.exports = { showToast }