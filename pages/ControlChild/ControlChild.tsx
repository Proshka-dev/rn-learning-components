import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createContext, useContext, useEffect, useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export default function ControlChild() {

	const [sendMessageTrigger, setSendMessageTrigger] = useState<null | boolean>(null);

	function onChildPres() {
		console.log('Hi (in parent). TriggerVal=', sendMessageTrigger);
		setSendMessageTrigger((val) => !val);
	}

	return (
		<View style={styles.container}>
			<View style={styles.description}>
				<Text>Управление из ребенка 1 ребенком 2 организовано разными способами.</Text>
				<Text>1. Вызов функции родителя. Установка state родителя. Спуск параметров ребенку 2 пропсами</Text>
				<Text>2. С помощью контекста</Text>
				<Text>3. </Text>

			</View>

			<View style={styles.container}>
				<Comp1 onPress={onChildPres} />
			</View>
			<View style={styles.container}>
				<Comp2 sendMessageTrigger={sendMessageTrigger} />
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
	description: {
		backgroundColor: '#ddd',
		gap: 10,
	},
});
