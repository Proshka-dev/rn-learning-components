import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { demoGrouppedData } from '../../data/demoGrouppedData';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper'; // Библиотека компонентов

export default function TextInputPage() {
	const [textInputValue, setTextInputValue] = useState('');

	const [isSecureTextEntry, setIsSecureTextEntry] = useState(false);
	const [isAutoCorrect, setIsAutoCorrect] = useState(true);
	const [isMultiline, setIsMultiline] = useState(false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<Text>Компонент TextInput</Text>
			<TextInput
				style={[styles.textInput, isMultiline && styles.multilineInput]}
				placeholder='введите текст'
				onChangeText={(text) => (setTextInputValue(text))}
				value={textInputValue}
				secureTextEntry={isSecureTextEntry}
				autoCorrect={isAutoCorrect}
				autoCapitalize='none'
				multiline={isMultiline}
			/>
			<Text>Введенный текст: {textInputValue}</Text>




			<View style={styles.settingsBlock}>
				<Text>Свойства компонента TextInput:</Text>
				<Checkbox.Item
					label='secureTextEntry'
					status={isSecureTextEntry ? 'checked' : 'unchecked'}
					onPress={() => (setIsSecureTextEntry(!isSecureTextEntry))}
				/>
				<Checkbox.Item
					label='autoCorrect'
					status={isAutoCorrect ? 'checked' : 'unchecked'}
					onPress={() => (setIsAutoCorrect(!isAutoCorrect))}
				/>
				<Checkbox.Item
					label='multiline'
					status={isMultiline ? 'checked' : 'unchecked'}
					onPress={() => (setIsMultiline(!isMultiline))}
				/>

			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		padding: 30,
	},
	textInput: {
		borderWidth: 1
	},
	settingsBlock: {
		borderWidth: 1,
		borderStyle: 'dashed',
		marginTop: 20,
		padding: 10,
	},
	multilineInput: {
		minHeight: 100,
		textAlignVertical: 'top', //прижимает текст в андроид к верхнему краю
	},


});
