import { ActivityIndicator, FlatList, ListRenderItemInfo, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

type TPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
}

function renderPost(value: ListRenderItemInfo<TPost>) {
	return (
		<View style={styles.postContainer}>
			<View style={styles.postBlockHorisontal}>
				<Text style={styles.postTitle}>id:</Text>
				<Text>{value.item.id.toString()}</Text>
			</View>
			<View style={styles.postBlockHorisontal}>
				<Text style={styles.postTitle}>userId:</Text>
				<Text>{value.item.userId.toString()}</Text>
			</View>
			<View style={styles.postBlockVertical}>
				<Text style={styles.postTitle}>title:</Text>
				<Text>{value.item.title}</Text>
			</View>
			<View style={styles.postBlockVertical}>
				<Text style={styles.postTitle}>body:</Text>
				<Text>{value.item.body}</Text>
			</View>
		</View>
	)
}

function waitMs(ms: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	})
}

export default function NetworkGetDataPage() {

	const [posts, setPosts] = useState<TPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);

	// Асинхронная функция получения данных
	async function fetchData() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
		const data = await response.json();
		await waitMs(2000); // Задержка, имитация долгого ответа сервера
		setPosts(data);
		setIsLoading(false);
		console.log('данные обновлены');
	}

	// Запуск получения данных при первом рендере компонента
	useEffect(() => {
		fetchData()
	}, []);

	// Функция обновления данных
	function handleRefresh() {
		setIsRefreshing(true);
		fetchData();
		setIsRefreshing(false); // По-моему, ошибка. Измение переменной произойдет в рамках 1 рендера
	}

	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.listContainer}>
				<ActivityIndicator size={'large'} color={'#6046cb'} animating={isLoading} />
				<FlatList
					data={posts}
					renderItem={renderPost}
					ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
					refreshing={isRefreshing} // Обновление данных
					onRefresh={handleRefresh}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		padding: 30,
	},
	listContainer: {
		flex: 1,
	},
	postContainer: {
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 8,
		padding: 5,
		backgroundColor: 'white',
		gap: 10,

		...Platform.select({
			ios: {
				shadowOffset: { width: 8, height: 8 },
				shadowOpacity: 0.6,
				shadowRadius: 5,
			}, android: {
				elevation: 5,
			}
		}),

	},
	postBlockHorisontal: {
		flexDirection: 'row'
	},
	postBlockVertical: {},
	postTitle: {
		fontWeight: 'bold',
	},
});
