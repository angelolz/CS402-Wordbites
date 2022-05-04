
import { Dimensions } from 'react-native';
import Toast from 'react-native-root-toast';

/**
 * scaling utils variables and functions here
 * retrieved from https://gist.github.com/nirsky/17b95fc07332bcce64cdb6916a4f271e
 */

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

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

export { showToast, getRatio, scale, verticalScale, moderateScale }