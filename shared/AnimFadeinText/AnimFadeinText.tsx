import React, { useEffect } from 'react';
import { Animated, Text, View, useAnimatedValue } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

type ViewAnimatedFadeInProps = PropsWithChildren<{ style: ViewStyle }>;

export const ViewAnimatedFadeIn: React.FC<ViewAnimatedFadeInProps> = props => {
    const fadeAnim = useAnimatedValue(0); // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};