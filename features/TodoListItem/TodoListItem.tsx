import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Ttodo } from '../../pages/Todo/Todo';

type TodoListItemProps = {
    todo: Ttodo;
    onPress: () => void;
}

export default function TodoListItem(props: TodoListItemProps) {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.text}>
                <Text>{props.todo.id}</Text>
                <Text>{props.todo.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        // width: '100%',
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        padding: 7,
        marginBottom: 5,
        borderRadius: 10,
    }
});
