import * as React from 'react';
import { View, Text } from 'react-native';

function BlogScreen({ route }) {
    console.log({ route });
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.title}</Text>
        </View>
    );
}

export default BlogScreen;
