import { useCallback, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default function DebouncingPage() {

	const [inputValue, setInputValue] = useState('')
	const [suggestedValues, setSuggestedValues] = useState<string[]>(['1', '2'])
	const timerIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

	interface IGetDataWithDebounceParams {
		text: string,
		delay: number,
		timerIdRef: React.RefObject<NodeJS.Timeout | undefined>,
		fnSetdValues: (data: string[]) => void,
	}

	function getDataWithDebounce(params: IGetDataWithDebounceParams) {
		// отменяем прошлый таймер таймер, если он был активирован
		if (params.timerIdRef.current !== undefined) clearTimeout(params.timerIdRef.current);

		// Планируем выполнение через заданную delay
		params.timerIdRef.current = setTimeout(async () => {
			const data = await getData(params.text)
			if (data) params.fnSetdValues(data);
		}, params.delay)
	}

	async function getData(text: string): Promise<string[]> {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
			const comments = response.data;

			return comments
				.filter(comment =>
					comment.name &&
					comment.name.toLowerCase().includes(text.toLowerCase())
				)
				.map(comment => comment.name);

		} catch (error) {
			console.error('Ошибка доступа к серверу', error);
			return [];
		}
	}

	function handlerOnChangeText(text: string) {
		(setInputValue(text));
		getDataWithDebounce({
			text: text,
			delay: 1500,
			fnSetdValues: setSuggestedValues,
			timerIdRef: timerIdRef,
		})
	}

	return (
		<View style={styles.container}>
			<Text>Debouncing - задержка обработки</Text>
			<TextInput
				style={styles.input}
				value={inputValue}
				placeholder='введите текст'
				onChangeText={handlerOnChangeText}
			/>
			<View>
				<FlatList
					style={styles.list}
					data={suggestedValues}
					renderItem={({ item }) => (
						<Text>{item}</Text>
					)}
				/>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		borderColor: 'green',
		borderWidth: 2,
		borderStyle: 'dashed',
		padding: 20,
		gap: 10,
	},
	input: {
		borderWidth: 1,
	},
	list: {
		borderWidth: 1,
		borderStyle: 'dashed',
		borderColor: 'grey',
		borderRadius: 10,
		padding: 10,
	},
});
