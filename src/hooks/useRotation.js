// https://iamshadmirza.com/react-native-animation-using-hooks-loading-screen
import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export default function useRotation() {
    const animation = useRef(new Animated.Value(0)).current;

    function startAnimation() {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }

    useEffect(() => {
        startAnimation();
    });

    const spin = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return spin;
}
