import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recent from '../components/Recent';

const { Navigator, Screen } = createStackNavigator();

function RecentsScreen() {
    return (
        <Navigator>
            <Screen name='Recent' component={Recent} />
        </Navigator>
    );
}

export default RecentsScreen;
