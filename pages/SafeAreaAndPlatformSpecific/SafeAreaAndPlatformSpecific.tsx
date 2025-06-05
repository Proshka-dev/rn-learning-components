import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

export default function SafeAreaAndPlatformSpecific() {

	const isAndroid = (Platform.OS === 'android' ? true : false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.container}>
				<Text style={styles.textNote}>Текст внутри SafeAreaView - контейнер максимального размера, не перекрываемый вырезами и скруглениями. Размещать следует на верхнем уровне, либо близко к нему.</Text>
				<Text style={styles.textNote}>Это приложение запущено на системе: Platform.OS = {Platform.OS}</Text>
				<Text style={[styles.textNote, isAndroid && styles.textNoteAndroid]}>К данному тексту применены дополнительные стили, если приложение запущено на android</Text>
				<Text style={styles.textNoteCombined}>
					{`А к данному применен стиль с использованием ...Platform.select({ios: { }, android: { }})`}
				</Text>
				<Text style={styles.textNote}>
					Также можно сделать весь модуль для android/ios, указав имя файла comp_name.android.tsx или comp_name.ios.tsx
				</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		borderColor: 'red',
		borderWidth: 2,
		borderStyle: 'dashed',
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
	textNote: {
		fontSize: 20,
	},
	textNoteAndroid: {
		color: 'blue',
	},
	textNoteCombined: {
		fontSize: 20,

		...Platform.select({
			ios: {
				color: 'red',
			}, android: {
				color: 'blue',
			}
		}),
	}
});
