import { StyleSheet, Text, View, FlatList } from 'react-native';

import { KeyState, StateColor, ColorSchemes } from '../constants/Constants';

const GameGrid = (props) => {
    const boxItem = (rowNum, i) => {
        let bgColor;
        let textColor;
        let borderColor;

        if (props.guesses[rowNum].wordArray[i].state === KeyState.unused)
            textColor = props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor;
        else
            textColor = 'white';

        switch (props.guesses[rowNum].wordArray[i].state) {
            case KeyState.unused:
                bgColor = 'rgba(0,0,0,0)';
                borderColor = props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor;
                break;
            case KeyState.wrong:
                bgColor = props.theme === 'light' ? StateColor.wrong : StateColor.alt_wrong;
                borderColor = props.theme === 'light' ? StateColor.wrong : StateColor.alt_wrong;
                break;
            case KeyState.close:
                bgColor = props.colorblind ? StateColor.cb_close : StateColor.reg_close;
                borderColor = bgColor = props.colorblind ? StateColor.cb_close : StateColor.reg_close;
                break;
            case KeyState.correct:
                bgColor = props.colorblind ? StateColor.cb_correct : StateColor.reg_correct;
                borderColor = props.colorblind ? StateColor.cb_correct : StateColor.reg_correct;
                break;
        }

        return (
            <View key={`${rowNum}:${i}`} style={[styles.box, { backgroundColor: bgColor, borderColor: borderColor }]}>
                <Text style={[styles.text, { color: textColor }]} adjustsFontSizeToFit={true}>
                    {props.guesses[rowNum].wordArray[i].key}
                </Text>
            </View>
        );
    };

    const boxes = (rowNum) => {
        let box = [];

        for (let i = 0; i < props.wordLength; i++)
            box.push(boxItem(rowNum, i));

        return box;
    }

    function renderItem({ index }) {
        return (
            <View key={`${index}`} style={styles.row}>
                {boxes(index)}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                key={props.wordLength}
                data={props.guesses}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderWidth: 3,
        borderRadius: 5,
        margin: 2
    },
    text: {
        fontSize: 100
    }
});

export default GameGrid;