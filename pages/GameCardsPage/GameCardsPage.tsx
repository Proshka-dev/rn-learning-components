import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, FlatList } from 'react-native';
import GameCard from '../../features/GameCard/GameCard';
import { cardsData } from '../../data/cardsData';
import { GameListSeparator } from '../../shared/GameListSeparator/GameListSeparator';

export default function GameCardsPage() {

	const isAndroid = (Platform.OS === 'android' ? true : false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<FlatList
				style={styles.list}
				data={cardsData}
				renderItem={(value) => (<GameCard cardData={value.item} />)}
				keyExtractor={(value) => (value.id.toString())} // Можно не указывать, если в объекте есть поля key или id
				ItemSeparatorComponent={GameListSeparator}
				ListHeaderComponent={<Text style={styles.listHeader}>Компонент ListHeaderComponent</Text>}
				ListFooterComponent={<Text style={styles.listFooter}>Компонент ListFooterComponent</Text>}
				ListEmptyComponent={<Text>Список пуст</Text>}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
	},
	list: {
		flex: 1,
		backgroundColor: '#ddd',
		borderColor: 'green',
		borderWidth: 2,
		borderStyle: 'dashed',
		paddingHorizontal: 30,
	},
	listHeader: {
		borderWidth: 1,
		borderStyle: 'dashed',
	},
	listFooter: {
		borderWidth: 1,
		borderStyle: 'dashed',
		height: 50,
	}
});
