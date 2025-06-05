import { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, Image, View } from "react-native";

export function StyledInput(props: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    function handlerOnPressPasswordIcon() {
        setIsPasswordVisible((value) => (!value));
    }

    return (
        <View>
            <TextInput
                secureTextEntry={props.isPassword && !isPasswordVisible}
                placeholderTextColor={'grey'}
                {...props}
                style={[styles.body, props.style]}
            />

            {props.isPassword && <Pressable onPress={handlerOnPressPasswordIcon} style={styles.eyeIcon}>
                {isPasswordVisible ? <Image source={require('../../assets/icons/visibility.png')}></Image> : <Image source={require('../../assets/icons/visibility_off.png')}></Image>}
            </Pressable>}


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'lightgrey',
        padding: 10,
        paddingRight: 40,
        borderRadius: 5,
        width: '100%',

    },
    eyeIcon: {
        position: "absolute",
        right: 10,
        top: 10,
    },
});