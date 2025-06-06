import { StyleSheet, Text } from "react-native";
import type { StyleProp, TextProps, TextStyle } from "react-native";

interface TStyledFirstletterText extends TextProps {
    styleFirstLetter?: StyleProp<TextStyle>
}

export function StyledFirstletterText(props: TStyledFirstletterText) {

    const children = props.children?.toString();

    if (!children) return;
    //Делим текст на слова
    const arr = children.split(' ');

    //Создаем 2 массива. В первом - первый буквы слова, во втором - остальная часть слова
    let arrFirstLetters: string[] = [];
    let arrEndOfWords: string[] = [];
    arr.forEach((item) => {
        arrFirstLetters.push(item.slice(0, 1));
        arrEndOfWords.push(item.slice(1, item.length));
    });

    return (
        <Text>
            {arrEndOfWords.map((item, index) => (
                <Text key={index}>
                    {index !== 0 && (<Text style={props.style}> </Text>)}
                    <Text style={props.styleFirstLetter}>{arrFirstLetters[index]}</Text>
                    <Text style={props.style}>{item}</Text>
                </Text>
            ))}
        </Text>
    )
}

const styles = StyleSheet.create({
});