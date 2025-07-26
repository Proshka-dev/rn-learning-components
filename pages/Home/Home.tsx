import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StyledButton } from '../../shared/StyledButton/StyledButton';
import { ViewAnimatedFadeIn } from '../../shared/AnimFadeinText/AnimFadeinText';

// Шрифты
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type THomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


SplashScreen.preventAutoHideAsync();


export default function Home({ navigation }: THomeProps) {

	//Шрифты
	const [loaded, error] = useFonts({
		'Windlass-Extended': require('../../assets/fonts/WindlassExtended-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<ScrollView style={styles.container}>
			<ViewAnimatedFadeIn style={styles.fadeinelem}>
				<Text style={styles.title}>Buttons inside ScrollView</Text>
			</ViewAnimatedFadeIn>

			<View style={styles.scrollViewNavButtons} >
				<StyledButton
					title='Login'
					onPress={() => navigation.navigate('Login')}
				/>

				<StyledButton
					title='Пример перетаскивания'
					onPress={() => navigation.navigate('Drag')}
				/>

				<StyledButton
					title='Todo'
					onPress={() => navigation.navigate('Todo')}
				/>

				<StyledButton
					title='Flex, Shadow'
					onPress={() => navigation.navigate('SandboxFlex')}
				/>

				<StyledButton
					title='Images'
					onPress={() => navigation.navigate('ImagesPage')}
				/>

				<StyledButton
					title='Pressable and Touchable'
					onPress={() => navigation.navigate('PressableAndTouchablePage')}
				/>

				<StyledButton
					title='Modal'
					onPress={() => navigation.navigate('ModalPage')}
				/>

				<StyledButton
					title='StatusBar and ActivityIndicator'
					onPress={() => navigation.navigate('StatusBarPage')}
				/>

				<StyledButton
					title='Alert'
					onPress={() => navigation.navigate('AlertPage')}
				/>

				<StyledButton
					title='Dimensions'
					onPress={() => navigation.navigate('DimensionsPage')}
				/>

				<StyledButton
					title='SafeArea and PlatformSpecific'
					onPress={() => navigation.navigate('SafeAreaAndPlatformSpecific')}
				/>

				<StyledButton
					title='GameCards'
					onPress={() => navigation.navigate('GameCardsPage')}
				/>

				<StyledButton
					title='SectionList'
					onPress={() => navigation.navigate('SectionListPage')}
				/>

				<StyledButton
					title='TextInput'
					onPress={() => navigation.navigate('TextInputPage')}
				/>

				<StyledButton
					title='Switch'
					onPress={() => navigation.navigate('SwitchPage')}
				/>

				<StyledButton
					title='NewLoginForm'
					onPress={() => navigation.navigate('NewLoginFormPage')}
				/>

				<StyledButton
					title='Network - Get data'
					onPress={() => navigation.navigate('NetworkGetDataPage')}
				/>

				<StyledButton
					title='Network - Post data'
					onPress={() => navigation.navigate('NetworkPostDataPage')}
				/>

				<StyledButton
					title='Navigation - pass params'
					// Навигация с передачей параметра
					onPress={() => navigation.navigate('NavigationPassParamsPage', { message: 'Имя_пользователя' })}
				/>

				<StyledButton
					title='OptionsList demo'
					onPress={() => navigation.navigate('OptionsListPage')}
				/>
			</View>

		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
	},
	title: {
		fontSize: 20,
	},
	fadeinelem: {
		borderWidth: 1,
		padding: 5,
		borderStyle: 'dashed',
		backgroundColor: '#ebdfbe',

	},
	scrollViewNavButtons: {
		flex: 1,
		padding: 20,
		gap: 20,
	}
});
