import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';


export default function ModalPage() {
	const [counter, setCounter] = useState<number>(0);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	function handlerOnPressShowModal() {
		setIsModalVisible(true);
	}

	function handlerOnPressCloseModal() {
		setIsModalVisible(false);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.counter}>
				counter value is {counter}
			</Text>
			<TouchableOpacity onPress={handlerOnPressShowModal} style={styles.buttonElement}>
				<Text>Show modal</Text>
			</TouchableOpacity>
			<Modal
				visible={isModalVisible}
				onRequestClose={handlerOnPressCloseModal} // При нажатии кнопки "обратно"
				animationType='slide'
				presentationStyle='pageSheet' // Влияет только на ios
			>
				<View style={styles.modalWrapper}>
					<View style={styles.modalBody}>
						<Text>Modal content</Text>
					</View>
					<TouchableOpacity onPress={handlerOnPressCloseModal} style={styles.buttonElement}>
						<Text>Close modal</Text>
					</TouchableOpacity>
				</View>
			</Modal>


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
		marginBottom: 20,
	},

	buttonElement: {
		backgroundColor: 'lightblue',
		padding: 7,
		width: 200,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
	},
	modalWrapper: {
		backgroundColor: 'coral',
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},

	modalBody: {
		backgroundColor: 'coral',
		flex: 1,
		alignItems: 'center'
	},

});
