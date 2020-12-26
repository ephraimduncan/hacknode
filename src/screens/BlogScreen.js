import * as React from 'react';
import { View, Text, Button } from 'react-native';
import BackButton from '../components/BackButton';

function BlogScreen({ route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.title}</Text>

            <BackButton />
        </View>
    );
}

export default BlogScreen;
