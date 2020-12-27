import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Featured from '../components/Featured';

const { Navigator, Screen } = createStackNavigator();

function FeaturedScreen() {
    return (
        <Navigator>
            <Screen
                name='Featured 🌟'
                component={Featured}
                options={{
                    headerStyle: { backgroundColor: '#ECEAFF' },
                    headerTintColor: '#313063',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Navigator>
    );
}

export default FeaturedScreen;
