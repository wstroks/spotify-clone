import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home/index';
import TabBar from './components/TabBar/index';

export default function Main() {
    return (
        <>
            <Home />
            <TabBar />
        </>
    );
}
