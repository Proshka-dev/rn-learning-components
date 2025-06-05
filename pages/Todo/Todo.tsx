import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, View } from 'react-native';
import { StyledTitle } from '../../shared/StyledTitle/StyledTitle';
import TodoListItem from '../../features/TodoListItem/TodoListItem';
import TodoAddForm from '../../features/TodoAddForm/TodoAddForm';

export type Ttodo = {
	text: string,
	id: number,
}

export default function Todo() {

	const [todos, setTodos] = useState<Ttodo[]>([
		{ text: 'купить кофе', id: 1 },
		{ text: 'выпить чай', id: 2 },
		{ text: 'сделать уроки', id: 3 },
	]);

	function deleteTodoById(id: number) {
		setTodos((prevTodoArray) => {
			const newTodoArray = prevTodoArray.filter((item) => (item.id !== id));
			return newTodoArray;
		})
	}

	function addTodo(todoText: string) {

		if (todoText.length > 3) {
			setTodos((prevTodoArray) => {
				const maxId = prevTodoArray.reduce((max, currentValue) => Math.max(max, currentValue.id), 0);

				const newId = maxId + 1;


				const newTodo: Ttodo = {
					id: newId,
					text: todoText,
				}

				return [...prevTodoArray, newTodo];
			})
		} else {
			console.log('Слишком короткое имя');
			Alert.alert('Ошибка ввода', 'Слишком короткое имя');
		}


	}


	return (
		<View style={styles.container}>
			<StyledTitle
				title='Todo title'
				style={styles.title}
			/>
			<View style={styles.content}>
				<TodoAddForm
					onPress={addTodo}
				/>
				<View style={styles.list}>
					<FlatList
						style={styles.flatlist}
						data={todos}
						renderItem={(data) => (
							<TodoListItem
								key={data.item.id}
								todo={data.item}
								onPress={() => (deleteTodoById(data.item.id))}
							/>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		width: '100%',

	},
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderWidth: 1,
		width: '100%',
	},
	title: {
		borderWidth: 1,
		width: '100%',
	},
	flatlist: {

	},

});
