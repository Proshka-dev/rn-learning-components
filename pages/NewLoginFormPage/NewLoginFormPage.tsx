import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

type TFormErrors = {
	username?: string;
	password?: string;
}

export default function NewLoginFormPage() {

	// Введенные данные
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// Отслеживание ошибок ввода
	const [formErrors, setFormErrors] = useState<TFormErrors>({});


	function validateForm() {
		let validationResult = true;
		setFormErrors({});

		if (username.length === 0) {
			validationResult = false;
			setFormErrors((value) => ({ ...value, username: 'Некорректное имя пользователя' }))
		};

		if (password.length < 4) {
			validationResult = false;
			setFormErrors((value) => ({ ...value, password: 'Пароль должен быть более 3 символов' }))
		};

		return validationResult;
	}

	function handleSubmit() {
		if (validateForm()) {
			// Валидация успешна
			console.log(`Валидация успешна. Имя: ${username}, пароль: ${password}`);
			setUsername('');
			setPassword('');

		} else {
			// Валидация неуспешна
			console.log('Валидация неуспешна');
		}
	}

	return (
		<SafeAreaView style={styles.safeContainer}>
			<KeyboardAvoidingView //Избегание перекрытия элементов ввода клавиатурой
				style={styles.keyboardAvoidingView}
				behavior='padding'
				keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
			>
				<View style={styles.form}>

					<Text style={styles.label}>Имя пользователя {username}</Text>
					<TextInput
						style={styles.input}
						value={username}
						onChangeText={(value) => {
							setUsername(value);
							setFormErrors({});
						}}
					/>
					<Text style={styles.errorMessage}>
						{formErrors.username}
					</Text>

					<Text style={styles.label}>Пароль {password}</Text>
					<TextInput
						style={styles.input}
						secureTextEntry
						value={password}
						onChangeText={(value) => {
							setPassword(value);
							setFormErrors({});
						}}
					/>
					<Text style={styles.errorMessage}>
						{formErrors.password}
					</Text>
					<TouchableOpacity
						style={styles.submitButton}
						onPress={handleSubmit}
					>
						<Text style={styles.submitButtonText}>Войти</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'lightgrey',
		padding: 20,

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
	errorMessage: {
		height: 25,
		color: 'red',
		fontSize: 11,
		paddingHorizontal: 10,
	},
	submitButton: {
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 40,
		alignSelf: 'center',
		backgroundColor: 'lightblue'
	},
	submitButtonText: {},
});
