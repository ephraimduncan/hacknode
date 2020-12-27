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
                    headerStyle: { backgroundColor: '#D9F5F8' },
                    headerTintColor: '#313063',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Navigator>
    );
}

export default HomeScreen;

// D9F5F8 Lightgreen
// FFEDD9 Lightorangered
// ECEAFF lightviolet
// 313063 Deepblue violet for title
// FFE5E6 Lightred
// 3450A1 Lightblue
