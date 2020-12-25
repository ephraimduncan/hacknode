import React, { useEffect } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import useRotation from '../hooks/useRotation';

const Loading = () => {
    const spin = useRotation();

    const animatedStyle = {
        transform: [{ rotate: spin }],
    };

    return (
        <Animated.View style={[styles.animatedView, animatedStyle]}>
            <Image source={require('../../assets/hashnode.png')} style={styles.logo} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    animatedView: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: { width: 50, height: 50 },
});

export default Loading;
