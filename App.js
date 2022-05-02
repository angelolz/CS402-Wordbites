import { useState } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';

import MainMenu from './src/views/MainMenu';
import GameBoard from './src/views/GameBoard';
import { emptyStats, Screen } from './src/constants/Constants';
import StatsScreen from './src/views/Stats';

var wordBites = () => {
    const [curView, setView] = useState(Screen.MAIN_MENU);
    const [showSettingsOverlay, toggleSettingsOverlay] = useState(false);
    const [stats, updateStats] = useState(emptyStats);

    //settings
    const [hardMode, toggleHardMode] = useState(false);
    const [theme, changeTheme] = useState("light")
    const [colorblind, toggleColorblind] = useState(false);
    const [swapKeys, toggleSwap] = useState(false)

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