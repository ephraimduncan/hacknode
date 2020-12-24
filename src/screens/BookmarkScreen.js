import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bookmark from '../components/Bookmark';

const { Navigator, Screen } = createStackNavigator();

function BookmarkScreen() {
    return (
        <Navigator>
            <Screen name='Bookmark' component={Bookmark} />
        </Navigator>
    );
}

export default BookmarkScreen;
