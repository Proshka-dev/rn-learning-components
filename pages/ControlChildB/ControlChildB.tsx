import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal, Alert } from 'react-native';
import { createContext, useState } from 'react';
import CompB1 from './CompB1';
import CompB2 from './CompB2';

interface IShowChildMessage {
	value: null | boolean;
	setValue: () => void;
}

//Создаем контекст
export const ShowChildMessageContext = createContext<IShowChildMessage>({
	value: null,
	setValue: () => { },
});

export default function ControlChildB() {


	const [sendMessageTrigger, setSendMessageTrigger] = useState<null | boolean>(null);


	function onChildPress() {
		console.log('Hi (in parent). TriggerVal=', sendMessageTrigger);
		setSendMessageTrigger((val) => !val);
	}

	return (
		<ShowChildMessageContext.Provider value={{ value: sendMessageTrigger, setValue: onChildPress }}>

			<View style={styles.container}>
				<View style={styles.description}>
					<Text>Управление из ребенка 1 ребенком 2 организовано разными способами.</Text>
					<Text>1. Вызов функции родителя. Установка state родителя. Спуск параметров ребенку 2 пропсами</Text>
					<Text>2. С помощью контекста</Text>
					<Text>3. </Text>

				</View>

				<View style={styles.container}>
					<CompB1 />
				</View>
				<View style={styles.container}>
					<CompB2 />
				</View>

			</View>
		</ShowChildMessageContext.Provider >
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
	description: {
		backgroundColor: '#ddd',
		gap: 10,
	},
});
