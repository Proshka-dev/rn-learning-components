import { StyleSheet, Text, View } from "react-native";
import type { StyleProp, TextProps, TextStyle } from "react-native";

export function GameListSeparator() {

    return (
        <View style={styles.body}>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: 40,
    }
});