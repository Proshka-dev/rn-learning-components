import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function ImagesPage() {

	const backgroundImage = require('../../assets/backgrounds/fonovii-risunok-russkaya-priroda.jpg');
	const urlImage = { uri: 'https://media.istockphoto.com/id/2196904734/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B2%D0%B5%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BB%D1%83%D0%B3-%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%8F%D1%80%D0%BA%D0%B8%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%BC.jpg?s=2048x2048&w=is&k=20&c=4h9e9j97ze05FV2EUWrTXynDeJc1Wx-M0ZRQ1nX2aX4=' }



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
		// width: 310,
		height: 150,
		resizeMode: 'contain',
		width: '100%',
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
