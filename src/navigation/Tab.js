import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import FeaturedScreen from '../screens/FeaturedScreen';
import RecentsScreen from '../screens/RecentScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import BlogScreen from '../components/Blog';

const { Navigator, Screen } = createBottomTabNavigator();

function MyTabs() {
    return (
        <Navigator
            initialRouteName='Best'
            tabBarOptions={{
                activeTintColor: '#2962ff',
                showLabel: false,
            }}
            // https://github.com/react-navigation/react-navigation/issues/5230#issuecomment-649206507
            screenOptions={({ route }) => ({
                tabBarButton: ['Blog'].includes(route.name)
                    ? () => {
                          return null;
                      }
                    : undefined,
            })}
        >
            <Screen
                name='Best'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name='fire' color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='Featured'
                component={FeaturedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='star' color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='Recents'
                component={RecentsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='clock' color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='Bookmarks'
                component={BookmarkScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='book' color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='Blog'
                component={BlogScreen}
                options={{
                    tabBarVisible: false,
                }}
            />
        </Navigator>
    );
}

export default MyTabs;
