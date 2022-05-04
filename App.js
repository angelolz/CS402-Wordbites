import { useEffect, useState } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';

import MainMenu from './src/views/MainMenu';
import GameBoard from './src/views/GameBoard';
import { emptyStats, Screen } from './src/constants/Constants';
import StatsScreen from './src/views/Stats';

import AsyncStorage from '@react-native-async-storage/async-storage';

var wordBites = () => {
    const [curView, setView] = useState(Screen.MAIN_MENU);
    const [showSettingsOverlay, toggleSettingsOverlay] = useState(false);
    const [stats, updateStats] = useState(emptyStats);

    //settings
    const [hardMode, toggleHardMode] = useState(false);
    const [theme, changeTheme] = useState("light")
    const [colorblind, toggleColorblind] = useState(false);
    const [swapKeys, toggleSwap] = useState(false)

    const [initialRender, setInitialRender] = useState(true);
    const [loadedInitialSettings, setLoadedInitialSettings] = useState(false);

    useEffect(async () => {
        try{
            // Skip the first render
            if(initialRender){
                setInitialRender(false);
                return;
            }

            // Skip if change was due to saved settings
            if(!loadedInitialSettings){
                return;
            }
            await AsyncStorage.setItem('@hardMode', JSON.stringify(hardMode));
            await AsyncStorage.setItem('@theme', JSON.stringify(theme));
            await AsyncStorage.setItem('@colorblind', JSON.stringify(colorblind));
            await AsyncStorage.setItem('@swapKeys', JSON.stringify(swapKeys));
            await AsyncStorage.setItem('@stats', JSON.stringify(stats));
        }
        catch(e){
            console.error(e);
        }
    }, [hardMode, theme, colorblind, swapKeys, stats]);
    
    // Load settings on startup
    useEffect(async () => {
        try{
            if(!loadedInitialSettings){
                const hardModeStorage = await AsyncStorage.getItem('@hardMode');
                const themeStorage = await AsyncStorage.getItem('@theme');
                const colorblindStorage = await AsyncStorage.getItem('@colorblind');
                const swapKeysStorage = await AsyncStorage.getItem('@swapKeys');
                const statsStorage = await AsyncStorage.getItem('@stats');
                toggleHardMode(JSON.parse(hardModeStorage));
                changeTheme(JSON.parse(themeStorage));
                toggleColorblind(JSON.parse(colorblindStorage));
                toggleSwap(JSON.parse(swapKeysStorage));
                if(JSON.parse(statsStorage)){
                    updateStats(JSON.parse(statsStorage));
                }
                setLoadedInitialSettings(true);
            }
        }
        catch(e) {
            console.error(e);
        }
    }, []);


    function view() {
        switch (curView) {
            case Screen.MAIN_MENU:
                return <MainMenu
                    view={curView}
                    setView={setView}
                    hardMode={hardMode}
                    toggleHardMode={toggleHardMode}
                    theme={theme}
                    changeTheme={changeTheme}
                    colorblind={colorblind}
                    toggleColorblind={toggleColorblind}
                    swapKeys={swapKeys}
                    toggleSwap={toggleSwap}
                    showSettingsOverlay={showSettingsOverlay}
                    toggleSettingsOverlay={toggleSettingsOverlay}
                />;
            case Screen.GAME:
                return <GameBoard
                    setView={setView}
                    stats={stats}
                    updateStats={updateStats}
                    hardMode={hardMode}
                    toggleHardMode={toggleHardMode}
                    theme={theme}
                    changeTheme={changeTheme}
                    colorblind={colorblind}
                    toggleColorblind={toggleColorblind}
                    swapKeys={swapKeys}
                    toggleSwap={toggleSwap}
                    showSettingsOverlay={showSettingsOverlay}
                    toggleSettingsOverlay={toggleSettingsOverlay}
                />
            case Screen.STATS:
                return <StatsScreen
                    setView={setView}
                    theme={theme}
                    stats={stats}
                />
            default:
                return <MainMenu
                    view={curView}
                    setView={setView}
                    hardMode={hardMode}
                    toggleHardMode={toggleHardMode}
                    theme={theme}
                    changeTheme={changeTheme}
                    colorblind={colorblind}
                    toggleColorblind={toggleColorblind}
                    swapKeys={swapKeys}
                    toggleSwap={toggleSwap}
                    showSettingsOverlay={showSettingsOverlay}
                    toggleSettingsOverlay={toggleSettingsOverlay}
                />;
        }
    }

    return (
        <RootSiblingParent>
            {view()}
        </RootSiblingParent>
    )
}

export default wordBites;