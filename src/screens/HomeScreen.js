import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';

const { Navigator, Screen } = createStackNavigator();

function HomeScreen() {
    return (
        <Navigator>
            <Screen name='Best' component={Home} />
        </Navigator>
    );
}

export default HomeScreen;
