import { useState } from "react";
import { Pressable, StyleSheet, TextInput, Image, View, PressableProps, Text, ViewProps } from "react-native";

export function StyledTitle(props: ViewProps & { title: string }) {

    return (
        <View style={[styles.body, props.style]}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'coral',
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
});