import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper'; // Библиотека компонентов

export default function SwitchPage() {

	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<SafeAreaView style={styles.safeContainer}>
			<Text>Компонент Switch</Text>

			<View style={styles.switchContainer}>
				<Text>Активация темной темы</Text>
				<Switch
					value={isDarkMode}
					onValueChange={() => (setIsDarkMode((value) => !value))}
					trackColor={{ false: 'red', true: 'lightgreen' }}
				//thumbColor='orange'
				/>
			</View>

			<Text>Темная тема: {isDarkMode ? 'включена' : 'выключена'}</Text>


			{/* <View style={styles.settingsBlock}>
				<Text>Свойства компонента Switch:</Text>
				<Checkbox.Item
					label='secureTextEntry'
					status={isSecureTextEntry ? 'checked' : 'unchecked'}
					onPress={() => (setIsSecureTextEntry(!isSecureTextEntry))}
				/>
			</View> */}

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		padding: 30,
	},
	settingsBlock: {
		borderWidth: 1,
		borderStyle: 'dashed',
		marginTop: 20,
		padding: 10,
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		borderWidth: 1,
		borderStyle: 'dashed',
		paddingHorizontal: 10,
	}
});
