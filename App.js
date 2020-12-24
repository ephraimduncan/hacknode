import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Tab from './src/navigation/Tab';

export default function App() {
    return (
        <NavigationContainer>
            <Tab />
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}
