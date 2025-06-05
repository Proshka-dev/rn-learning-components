import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';


export default function AlertPage() {

	function handlerOnPressShowAlert() {
		Alert.alert('Заголовок', 'Текст сообщения');
	}

	function handlerOnPressShowAlert2() {
		Alert.alert('Заголовок', 'Текст сообщения. На андроид максимум 3 кастомных кнопки.', [
			{
				text: 'Кнопка1',
				onPress: () => console.log('Кнопка 1 нажата'),
			},
			{
				text: 'Кнопка2',
				onPress: () => console.log('Кнопка 2 нажата'),
			},
			{
				text: 'Кнопка3',
				onPress: () => console.log('Кнопка 3 нажата'),
			},
		]);
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handlerOnPressShowAlert} style={styles.buttonElement}>
				<Text>Show Alert</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handlerOnPressShowAlert2} style={styles.buttonElement}>
				<Text>с кастомными кнопками</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		borderColor: 'green',
		borderWidth: 4,
		borderStyle: 'dashed',
		//alignItems: 'center',
		padding: 20,
		gap: 10,
	},
	buttonElement: {
		backgroundColor: 'lightblue',
		padding: 7,
		width: 200,
		//alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
	},
});
