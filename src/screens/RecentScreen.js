import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recent from '../components/Recent';

const { Navigator, Screen } = createStackNavigator();

function RecentsScreen() {
    return (
        <Navigator>
            <Screen
                name='Recent ⌛'
                component={Recent}
                options={{
                    headerStyle: { backgroundColor: '#FFEDD9' },
                    headerTintColor: '#313063',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Navigator>
    );
}

export default RecentsScreen;
