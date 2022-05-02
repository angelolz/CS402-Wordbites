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

function getRatio(stat) {
    if (stat.played === 0)
        return '0.00%'
    else
        return `${parseFloat(((stat.wins * 1.0 / stat.played) * 100).toFixed(2))}%`
}

module.exports = { showToast, getRatio }