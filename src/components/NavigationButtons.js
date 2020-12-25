import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavigationButtons({ goToNext, goToPrevious }) {
    return (
        <View style={styles.navView}>
            <TouchableOpacity onPress={goToPrevious}>
                <View>
                    <Feather name='arrow-left' size={30} color='#8E8E8F' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNext}>
                <View>
                    <Feather name='arrow-right' size={30} color='#8E8E8F' />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
});
