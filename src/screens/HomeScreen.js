import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';

const { Navigator, Screen } = createStackNavigator();

function HomeScreen() {
    return (
        <Navigator>
            <Screen
                name='Best 🔥'
                component={Home}
                options={{
                    headerStyle: { backgroundColor: '#EBA8B1' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Navigator>
    );
}

export default HomeScreen;
