import { useState } from "react";
import { Pressable, StyleSheet, TextInput, Image, View, PressableProps, Text } from "react-native";

export function StyledButton(props: PressableProps & { title: string }) {

    return (
        <Pressable onPress={props.onPress}>
            <View style={styles.body}>
                <Text>{props.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#88b0d1',
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"

    },
    eyeIcon: {
        position: "absolute",
        right: 10,
        top: 10,
    },
});