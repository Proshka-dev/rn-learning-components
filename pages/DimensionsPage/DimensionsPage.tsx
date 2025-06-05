import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function DimensionsPage() {

	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	console.log((windowWidth > 100) && '1');

	return (
		<View style={styles.container}>
			<Text style={[styles.box, windowWidth > 600 && styles.box600]}>
				width:{windowWidth},
				heigth:{windowHeight},
				text: {windowWidth > 1600 && '1'}
			</Text>
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
	box: {
		backgroundColor: 'violet',
		padding: 20,
		textAlign: 'center',
		width: '90%',
		height: '90%',
		fontSize: 24,
	},
	box600: {
		width: '70%',
		height: '60%',
		fontSize: 35,
	}
});
