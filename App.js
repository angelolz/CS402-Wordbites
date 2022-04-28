import { useState } from 'react';

import MainMenu from './views/MainMenu';
import GameBoard from './views/GameBoard';
import Screen from './constants/Screen';

var wordBites = () => {
    const [hidden, setHidden] = useState(false);
    const [theme, changeTheme] = useState("light")
    const [curView, setView] = useState(Screen.MAIN_MENU);
    const [showSettingsOverlay, toggleSettingsOverlay] = useState(false);

    switch (curView) {
        case Screen.MAIN_MENU:
            return <MainMenu setView={setView} theme={theme} changeTheme={changeTheme} showSettingsOverlay={showSettingsOverlay} toggleSettingsOverlay={toggleSettingsOverlay} />;
        case Screen.GAME:
            return <GameBoard setView={setView} theme={theme} changeTheme={changeTheme} showSettingsOverlay={showSettingsOverlay} toggleSettingsOverlay={toggleSettingsOverlay} />
    }
}

export default wordBites;