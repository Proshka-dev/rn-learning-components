import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

type TPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
}



export default function NetworkPostDataPage() {

	const [userId, setUserId] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [body, setBody] = useState<string>('');
	const [isPosting, setIsPosting] = useState<boolean>(false);

	function validateData() {
		return true;
	}

	// Отправка данный с помощью fetch
	async function postDataByFetch() {
		console.log('отправка данных с помощью fetch...');

		try {
			setIsPosting(true);

			const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					userId: userId,
					title: title,
					body: body,
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP ошибка! Статус: ${response.status}`);
			}

			const data = await response.json();
			console.log(`данные отправлены, создан пост с Id = ${data.id}`);

		} catch (error) {
			const apiError = error as Error;
			console.error('Ошибка отправки данных:', apiError.message);
		} finally {
			setIsPosting(false)
		}

	}

	// Отправка данный с помощью axios
	async function postDataByAxios() {
		console.log('отправка данных с помощью axios...');

		try {
			setIsPosting(true);

			const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
				userId: userId,
				title: title,
				body: body,
			}, {
				timeout: 2000, // Автоматическая отмена запроса через заданное время
			});
			console.log(`данные отправлены, создан пост с Id = ${response.data.id}`);

		} catch (error) {
			// обработка ошибки
			const apiError = error as Error;
			console.error('Ошибка отправки данных:', apiError.message);
		} finally {
			setIsPosting(false)
		}



	}

	function handleSubmitFetch() {
		if (validateData()) {
			postDataByFetch();
		} else {
			// Отобразить ошибки
		}
	}

	function handleSubmitAxios() {
		if (validateData()) {
			postDataByAxios(); // Альтернативный способ отправки через axios
		} else {
			// Отобразить ошибки
		}
	}

	// Динамический стиль для кнопки
	const stylesDynamic = StyleSheet.create({
		submitButton: {
			...isPosting && { backgroundColor: 'lightgrey' },
		},
	});

	return (
		<SafeAreaView style={styles.safeContainer}>
			<KeyboardAvoidingView //Избегание перекрытия элементов ввода клавиатурой
				style={styles.keyboardAvoidingView}
				behavior='padding'
				keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
			>
				<View style={styles.form}>

					<View>
						<Text style={styles.label}>Id пользователя</Text>
						<TextInput
							style={styles.input}
							keyboardType='numeric'
							value={userId}
							onChangeText={(value) => setUserId(value)}
						/>
					</View>
					<View>
						<Text style={styles.label}>Заголовок</Text>
						<TextInput
							style={[styles.input, styles.inputTitle]}
							multiline
							value={title}
							onChangeText={(value) => setTitle(value)}
						/>
					</View>

					<View>
						<Text style={styles.label}>Текст</Text>
						<TextInput
							style={[styles.input, styles.inputBody]}
							multiline
							value={body}
							onChangeText={(value) => setBody(value)}
						/>
					</View>

					<TouchableOpacity
						style={[styles.submitButton, stylesDynamic.submitButton]}
						onPress={handleSubmitFetch}
						disabled={isPosting}
					>
						<Text style={styles.submitButtonText}>
							{isPosting ? 'Отправляю...' : 'Отправить (fetch)'}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.submitButton, stylesDynamic.submitButton]}
						onPress={handleSubmitAxios}
						disabled={isPosting}
					>
						<Text style={styles.submitButtonText}>
							{isPosting ? 'Отправляю...' : 'Отправить (axios)'}
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		backgroundColor: '#f3f3f3',
	},
	keyboardAvoidingView: {
		flex: 1,
		padding: 30,
		alignItems: 'center',
	},
	form: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'lightgrey',
		padding: 20,
		gap: 20,

		shadowColor: 'black',
		...Platform.select({
			ios: {
				shadowOffset: { width: 16, height: 16 },
				shadowOpacity: 0.6,
				shadowRadius: 10,
			}, android: {
				elevation: 10,
			}
		}),
	},
	label: {
		paddingHorizontal: 10,
		fontWeight: '700',

	},
	input: {
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 7,
		paddingHorizontal: 10,
	},
	inputTitle: {
		minHeight: 80,
		textAlignVertical: 'top',
	},
	inputBody: {
		minHeight: 120,
		textAlignVertical: 'top',
	},
	submitButton: {
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 40,
		alignSelf: 'center',
		backgroundColor: 'lightblue',
	},
	submitButtonText: {},
});
