import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import GameCard from '../../features/GameCard/GameCard';
import { cardsData } from '../../data/cardsData';

export default function GameCardsPage() {

	const isAndroid = (Platform.OS === 'android' ? true : false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.container}>
				<GameCard cardData={cardsData[0]} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		borderColor: 'green',
		borderWidth: 2,
		borderStyle: 'dashed',
		padding: 20,
		gap: 20
	},
});
