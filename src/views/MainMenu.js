import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, SafeAreaView, View, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Screen, ColorSchemes } from '../constants/Constants';
import { moderateScale } from '../constants/Utils';
import Settings from './Settings';

const MainMenu = (props) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]}>
            {props.showSettingsOverlay ?
                <Settings
                    toggleSettingsOverlay={props.toggleSettingsOverlay}
                    hardMode={props.hardMode}
                    toggleHardMode={props.toggleHardMode}
                    theme={props.theme}
                    changeTheme={props.changeTheme}
                    colorblind={props.colorblind}
                    toggleColorblind={props.toggleColorblind}
                    swapKeys={props.swapKeys}
                    toggleSwap={props.toggleSwap}
                /> : null
            }
            <View style={styles.buttonContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={props.colorblind ? require('../../assets/cb_logo.png') : require('../../assets/logo.png')} />
                </View>
                <Pressable style={styles.menuButton} onPress={() => props.setView(Screen.GAME)}>
                    <Ionicons name="play-circle" size={moderateScale(20)} color={'white'} />
                    <Text style={styles.text} adjustsFontSizeToFit={true}>Play</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={() => props.setView(Screen.STATS)}>
                    <Ionicons name="stats-chart" size={moderateScale(20)} color={'white'} />
                    <Text style={styles.text}>Stats</Text>
                </Pressable>
                <Pressable style={styles.menuButton} onPress={() => props.toggleSettingsOverlay(true)}>
                    <Ionicons name="settings" size={moderateScale(20)} color={'white'} />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        width: moderateScale(300),
        height: moderateScale(150)
    },
    buttonContainer: {
        width: moderateScale(150),
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    menuButton: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
        backgroundColor: "#4bb84b",
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(20),
        textAlign: 'center',
    }
});

export default MainMenu;