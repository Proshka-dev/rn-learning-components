import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function ImagesPage() {

	const backgroundImage = require('../../assets/backgrounds/fonovii-risunok-russkaya-priroda.jpg');
	const urlImage = { uri: 'https://images.unsplash.com/photo-1748223341494-86fb07ff110b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }



	return (
		<View style={styles.container}>
			<Image source={backgroundImage} style={styles.fileImage} />
			<Image source={urlImage} style={styles.urlImage} />
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<View >
					<Text style={styles.blockInsideImage}>Text inside of ImageBackground</Text>
				</View>
			</ImageBackground>
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
	},
	fileImage: {
		width: 300,
		height: 200,
	},
	urlImage: {
		width: 300,
		height: 200,
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
	},
	blockInsideImage: {
		marginTop: 20,
		marginLeft: 20,
		backgroundColor: 'white',
		alignSelf: 'flex-start',
		padding: 5,
	}
});
