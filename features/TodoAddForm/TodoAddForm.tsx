import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Ttodo } from '../../pages/Todo/Todo';
import { StyledInput } from '../../shared/StyledInput/StyledInput';
import { StyledButton } from '../../shared/StyledButton/StyledButton';
import { useState } from 'react';

type TodoAddFormProps = {
    onPress: (text: string) => void;
}

export default function TodoAddForm(props: TodoAddFormProps) {

    const [inputTextValue, setinputTextValue] = useState('');

    function handlerOnChangeText(value: string) {
        setinputTextValue(value);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>New todo:</Text>
            <StyledInput
                style={styles.input}
                onChangeText={handlerOnChangeText}
            />
            <StyledButton title='+' style={styles.button} onPress={() => props.onPress(inputTextValue)} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        borderWidth: 1,
        borderColor: '#bbb',
        // borderStyle: 'dashed',
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        padding: 7,
        marginBottom: 5,
        borderRadius: 10,
    },
    text: {

    },
    input: {
        flex: 1,
        width: 150,
        // backgroundColor: 'red',
    },
    button: {
        //flex: 2,
        backgroundColor: 'red',
    },
});
