import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, FlatList } from 'react-native';
import GameCard from '../../features/GameCard/GameCard';
import { cardsData } from '../../data/cardsData';
import { GameListSeparator } from '../../shared/GameListSeparator/GameListSeparator';

export default function GameCardsPage() {

	const isAndroid = (Platform.OS === 'android' ? true : false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<FlatList
				style={styles.container}
				data={cardsData}
				renderItem={(value) => (<GameCard cardData={value.item} key={value.item.id} />)}
				ItemSeparatorComponent={GameListSeparator}
				ListFooterComponent={GameListSeparator}
			/>
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
		padding: 30,
	},
});
