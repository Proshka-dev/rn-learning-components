import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function SandboxFlex() {


	return (
		<View style={styles.container}>
			<Text style={styles.box1}>1</Text>
			<Text style={styles.box2}>2</Text>
			<Text style={styles.box3}>3</Text>
			<Text style={styles.box4}>4</Text>
			{/* Иконка */}
			<View style={styles.shadowBox}><Text>5</Text></View>
			<MaterialIcons name="delete" size={32} color="green" />

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
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	box1: {
		backgroundColor: 'violet',
		padding: 20,
		textAlign: 'center',
	},
	box2: {
		backgroundColor: 'gold',
		padding: 20,
		textAlign: 'center',
		// flex: 1,
	},
	box3: {
		backgroundColor: 'coral',
		padding: 20,
		textAlign: 'center',
		// flex: 2,
	},
	box4: {
		backgroundColor: 'skyblue',
		padding: 20,
		textAlign: 'center',

		//shadow (iOS only)
		shadowColor: 'blue',
		shadowOffset: { width: 16, height: 16 },
		shadowOpacity: 0.6,
		shadowRadius: 10,
	},
	shadowBox: {
		backgroundColor: 'yellow',
		padding: 20,
		textAlign: 'center',
		width: 100,
		height: 100,

		//shadow iOS
		shadowOffset: { width: 16, height: 16 },
		shadowOpacity: 0.6,
		shadowRadius: 10,

		//shadow Android
		elevation: 10,

		//work on both platforms
		shadowColor: 'blue',
	},

});
