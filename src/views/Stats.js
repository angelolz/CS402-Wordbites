import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DataTable } from 'react-native-paper';
import { Screen } from '../constants/Constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const StatsScreen = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.theme === 'light' ? 'white' : '#121213' }]}>
            <View style={styles.backButton}>
                <Pressable onPress={() => { props.setView(Screen.MAIN_MENU) }}>
                    <Ionicons name="home-sharp" size={40} color={props.theme === 'light' ? 'black' : 'white'} />
                </Pressable>
            </View>
            <Text style={[styles.title, { color: props.theme === 'light' ? 'black' : 'white' }]}>Stats</Text>
            <View>
                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Results</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Wins</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Loses</Text>
                        </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>4 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>125</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>102</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>5 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>420</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>104</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>6 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>40</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>15</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>7 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>25</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>20</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>8 Letter Stats</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>0</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>0</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>

                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Streaks</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Current</Text>
                        </DataTable.Title>
                        <DataTable.Title numeric>
                            <Text style={[styles.headerText, { color: props.theme === 'light' ? 'black' : 'white' }]}>Top</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>4 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>102</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>142</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>5 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>229</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>572</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell >
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>6 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>32</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>79</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>7 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>2</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>3</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{ borderBottomColor: props.theme === 'light' ? '#d3d6da' : '#3a3a3c' }}>
                        <DataTable.Cell>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>8 Letter Streak</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>0</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={{ color: props.theme === 'light' ? 'black' : 'white' }}>0</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <StatusBar
                backgroundColor={props.theme === 'light' ? 'white' : '#121213'}
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