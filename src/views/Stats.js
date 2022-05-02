import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DataTable } from 'react-native-paper';
import { Screen, ColorSchemes } from '../constants/Constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const StatsScreen = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor }]}>
            <View style={styles.backButton}>
                <Pressable onPress={() => { props.setView(Screen.MAIN_MENU) }}>
                    <Ionicons name="home-sharp" size={40} color={props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor} />
                </Pressable>
            </View>
            <Text style={[styles.title, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Stats</Text>
            <View>
                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Results</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Wins</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Loses</Text>
                        </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>4 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>125</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>102</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>5 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>420</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>104</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>6 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>40</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>15</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>7 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>25</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>20</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>8 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>0</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>0</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>

                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Streaks</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Current</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Top</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>4 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>102</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>142</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>5 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>229</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>572</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell >
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>6 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>32</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>79</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>7 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>2</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>3</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>8 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>0</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>0</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? ColorSchemes.light.bgColor : ColorSchemes.dark.bgColor}
                style={props.theme === 'light' ? 'dark' : 'light'}
                translucent={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between',
    },
    table: {
        marginVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: ((width > height) ? width / 15 : height / 30),
        textAlign: 'center',
        paddingHorizontal: 10
    },
    backButton: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default StatsScreen;