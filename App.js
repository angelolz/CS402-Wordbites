import { useState } from 'react';

import Settings from './views/Settings';
import MainMenu from './views/MainMenu';
import GameBoard from './views/GameBoard';
import Screen from './constants/Screen';

var wordBites = () => {
    const [hidden, setHidden] = useState(false);
    const [theme, changeTheme] = useState("dark")
    const [curView, setView] = useState(Screen.MAIN_MENU);

    switch (curView) {
        case Screen.MAIN_MENU:
            return <MainMenu setView={setView} theme={theme} />;
        case Screen.GAME:
            return <GameBoard setView={setView} theme={theme} />
        case Screen.SETTINGS:
            return <Settings setView={setView} theme={theme} changeTheme={changeTheme} />
        default:
            return <MainMenu setView={setView} theme={theme} />;
    }
}

export default wordBites;