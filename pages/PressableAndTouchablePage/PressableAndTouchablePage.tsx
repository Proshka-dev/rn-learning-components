import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';


export default function PressableAndTouchablePage() {
	const [counter, setCounter] = useState<number>(0);

	function handlerOnPress() {
		setCounter((value) => (++value));
	}

	return (
		<View style={styles.container}>
			<Text style={styles.counter}>
				counter value is {counter}
			</Text>
			<View style={styles.body}>
				<Pressable onPress={handlerOnPress} style={styles.buttonElement}>
					<Text>Pressable</Text>
				</Pressable>
				<TouchableHighlight onPress={handlerOnPress} style={styles.buttonElement}>
					<Text>TouchableHighlight</Text>
				</TouchableHighlight>
				<TouchableOpacity onPress={handlerOnPress} style={styles.buttonElement}>
					<Text>TouchableOpacity</Text>
				</TouchableOpacity>

			</View>

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
		alignItems: 'center',
		padding: 20,
	},
	counter: {
		fontWeight: 700,
		fontSize: 20,
		backgroundColor: 'lightcyan',
		padding: 10,
	},

	body: {
		flex: 1,
		padding: 20,
		gap: 10,
		borderWidth: 1,
		borderStyle: 'dashed',

	},

	buttonElement: {
		backgroundColor: 'lightblue',
		padding: 7,
		width: 200,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
	}
});
