import { useState } from 'react';

import MainMenu from './src/views/MainMenu';
import GameBoard from './src/views/GameBoard';
import { Screen } from './src/constants/Constants';

var wordBites = () => {
    const [theme, changeTheme] = useState("light")
    const [curView, setView] = useState(Screen.MAIN_MENU);
    const [showSettingsOverlay, toggleSettingsOverlay] = useState(false);
    const [colorblind, toggleColorblind] = useState(false);

    switch (curView) {
        case Screen.MAIN_MENU:
            return <MainMenu
                view={curView}
                setView={setView}
                theme={theme}
                changeTheme={changeTheme}
                colorblind={colorblind}
                toggleColorblind={toggleColorblind}
                showSettingsOverlay={showSettingsOverlay}
                toggleSettingsOverlay={toggleSettingsOverlay}
            />;
        case Screen.GAME:
            return <GameBoard
                setView={setView}
                theme={theme}
                changeTheme={changeTheme}
                colorblind={colorblind}
                toggleColorblind={toggleColorblind}
                showSettingsOverlay={showSettingsOverlay}
                toggleSettingsOverlay={toggleSettingsOverlay}
            />
        default:
            return <MainMenu
                view={curView}
                setView={setView}
                theme={theme}
                changeTheme={changeTheme}
                colorblind={colorblind}
                toggleColorblind={toggleColorblind}
                showSettingsOverlay={showSettingsOverlay}
                toggleSettingsOverlay={toggleSettingsOverlay}
            />;
    }
}

export default wordBites;