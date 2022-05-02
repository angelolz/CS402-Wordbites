import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DataTable } from 'react-native-paper';
import { Screen, ColorSchemes } from '../constants/Constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const StatsScreen = (props) => {
    function getRatio(stat) {
        if (stat.played === 0)
            return '0.00%'
        else
            return `${parseFloat(((stat.wins * 1.0 / stat.played) * 100).toFixed(2))}%`
    }

    function getCell(text, numeric) {
        if (numeric) {
            return (
                <DataTable.Cell numeric>
                    <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>{text}</Text>
                </DataTable.Cell>
            )
        }

        else {
            return (
                <DataTable.Cell>
                    <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>{text}</Text>
                </DataTable.Cell>
            )
        }
    }

    function getStatsRow(length) {
        return (
            <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
                {getCell(`${length} Letter Stats`, false)}
                {getCell(props.stats[`${length}`].wins, true)}
                {getCell(props.stats[`${length}`].played - props.stats[`${length}`].wins, true)}
                {getCell(getRatio(props.stats[`${length}`]), true)}
            </DataTable.Row>
        )
    }

    function getStreakRow(length) {
        return (<DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? ColorSchemes.light.toneColor : ColorSchemes.dark.toneColor }}>
            <DataTable.Cell>
                <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>{length} Letter Streak</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
                <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>{props.stats[`${length}`].streak}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
                <Text style={{ color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }}>{props.stats[`${length}`].top_streak}</Text>
            </DataTable.Cell>
        </DataTable.Row>)
    }

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
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? ColorSchemes.light.textColor : ColorSchemes.dark.textColor }]}>Ratio</Text>
                        </DataTable.Title>
                    </DataTable.Header>

                    {getStatsRow(4)}
                    {getStatsRow(5)}
                    {getStatsRow(6)}
                    {getStatsRow(7)}
                    {getStatsRow(8)}
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

                    {getStreakRow(4)}
                    {getStreakRow(5)}
                    {getStreakRow(6)}
                    {getStreakRow(7)}
                    {getStreakRow(8)}
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