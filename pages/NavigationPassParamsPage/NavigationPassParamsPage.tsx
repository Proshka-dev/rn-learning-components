import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { useLayoutEffect } from 'react';

type TNavigationPassParamsPageProps = NativeStackScreenProps<RootStackParamList, 'NavigationPassParamsPage'>;

export default function NavigationPassParamsPage(params: TNavigationPassParamsPageProps) {

	const passedMessage = params.route.params.message;

	// Динамическая установка параметров заголовка стак навигатора
	// Но есть альтернативный вариант - функция вместо опций в Stack.Screen
	useLayoutEffect(() => {
		params.navigation.setOptions({ title: passedMessage })
	}, [params.navigation, passedMessage]);


	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.form}>
				<Text>Переданный параметр: {passedMessage}</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		//backgroundColor: '#f3f3f3',
		padding: 30,
	},
	form: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'lightgrey',
		padding: 20,
		gap: 20,

		shadowColor: 'black',
		...Platform.select({
			ios: {
				shadowOffset: { width: 16, height: 16 },
				shadowOpacity: 0.6,
				shadowRadius: 10,
			}, android: {
				elevation: 10,
			}
		}),
	},
});
