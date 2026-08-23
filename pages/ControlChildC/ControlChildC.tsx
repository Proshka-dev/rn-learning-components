import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal, Alert, Button } from 'react-native';
import { createContext, useRef, useState } from 'react';
import CompC1 from './CompC1';
import CompC2, { TImperativeHandle } from './CompC2';

export default function ControlChildC() {

	const ref = useRef<TImperativeHandle>(null);

	function onChildPres() {
		console.log('Hi (in parent).');
		ref.current?.sendLogMessage();
	}

	return (
		<View style={styles.container}>
			<View style={styles.description}>
				<Text>Управление из ребенка 1 ребенком 2 организовано разными способами.</Text>
				<Text>1. Вызов функции родителя. Установка state родителя. Спуск параметров ребенку 2 пропсами</Text>
				<Text>2. С помощью контекста</Text>
				<Text>3. useImperativeHandle</Text>

			</View>

			<View style={styles.container}>
				<CompC1 sendConsoleMessage={onChildPres} />
			</View>
			<View style={styles.container}>
				<CompC2 ref={ref} />
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
