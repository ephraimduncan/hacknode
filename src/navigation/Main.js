import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Tab from './Tab';

export default function Main() {
    return (
        <NavigationContainer>
            <Tab />
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}
