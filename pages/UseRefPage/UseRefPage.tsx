import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ref, RefObject, useRef, useState } from 'react';
import type { TextInput as TextInputType } from 'react-native';

export default function UseRefPage() {

	const [textInputValue, setTextInputValue] = useState('');
	const refInput: RefObject<TextInputType | null> = useRef(null);

	let refRerenderCounter = useRef(0);
	refRerenderCounter.current = refRerenderCounter.current + 1;

	return (
		<View style={styles.container}>
			<Text>1. Фокусировка на элементах</Text>
			<Text>Input с сохранением введенных данных в state</Text>
			<TextInput
				style={styles.textInput}
				placeholder='введите текст'
				onChangeText={(text) => (setTextInputValue(text))}
				value={textInputValue}
				ref={refInput}
			/>
			<Text>Input без сохранения введенных данных в state</Text>
			<TextInput
				style={styles.textInput}
				placeholder='введите текст'
			/>
			<Button
				title='Press to focus at Input1'
				onPress={() => refInput.current?.focus()}
			/>

			<Text>2. Хранение тех.информации между ререндерами, при измненении которой не нужно запускать ререндеры. Допустим, счетчик рендеров.</Text>
			<Text>Количество рендеров = {refRerenderCounter.current}</Text>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
		padding: 20,
	},
	textInput: {
		borderWidth: 1,
		width: '70%',
	},

});
