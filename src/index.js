import React from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Home from './screens/Home/index';
import TabBar from './components/TabBar/index';
import Album from './screens/Album/index';
/*
    Telas Album e Home nao foram ligadas apenas treino
*/
export default function Main() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <Home />
            <TabBar />
        </>
    );
}
