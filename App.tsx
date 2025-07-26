import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import DragExample from './pages/DragExample/DragExample';
import Todo from './pages/Todo/Todo';
import SandboxFlex from './pages/SandboxFlex/SandboxFlex';
import ImagesPage from './pages/ImagesPage/ImagesPage';
import PressableAndTouchablePage from './pages/PressableAndTouchablePage/PressableAndTouchablePage';
import ModalPage from './pages/ModalPage/ModalPage';
import StatusBarPage from './pages/StatusBarPage/StatusBarPage';
import AlertPage from './pages/AlertPage/AlertPage';
import DimensionsPage from './pages/DimensionsPage/DimensionsPage';
import SafeAreaAndPlatformSpecific from './pages/SafeAreaAndPlatformSpecific/SafeAreaAndPlatformSpecific';
import GameCardsPage from './pages/GameCardsPage/GameCardsPage';
import SectionListPage from './pages/SectionListPage/SectionListPage';
import TextInputPage from './pages/TextInputPage/TextInputPage';
import SwitchPage from './pages/SwitchPage/SwitchPage';
import NewLoginFormPage from './pages/NewLoginFormPage/NewLoginFormPage';
import NetworkGetDataPage from './pages/NetworkGetDataPage/NetworkGetDataPage';
import NetworkPostDataPage from './pages/NetworkPostDataPage/NetworkPostDataPage';
import NavigationPassParamsPage from './pages/NavigationPassParamsPage/NavigationPassParamsPage';
import OptionsListPage from './pages/OptionsListPage/OptionsListPage';

// Типизация параметров экранов
export type RootStackParamList = {
	Home: undefined; // Без параметров
	Login: undefined;
	Drag: undefined;
	Todo: undefined;
	SandboxFlex: undefined;
	ImagesPage: undefined;
	PressableAndTouchablePage: undefined;
	ModalPage: undefined;
	StatusBarPage: undefined;
	AlertPage: undefined;
	DimensionsPage: undefined;
	SafeAreaAndPlatformSpecific: undefined;
	GameCardsPage: undefined;
	SectionListPage: undefined;
	TextInputPage: undefined;
	SwitchPage: undefined;
	NewLoginFormPage: undefined;
	NetworkGetDataPage: undefined;
	NetworkPostDataPage: undefined;
	NavigationPassParamsPage: { message?: string };
	OptionsListPage: undefined;
	//Profile: { userId: string }; // Параметр userId типа string
	//Settings: { theme: 'light' | 'dark' }; // Пример сложного типа
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				// можно указывать те же опции, что и для индивидуальных экранов
				headerStyle: { backgroundColor: '#e3f3fc' },
			}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
				<Stack.Screen name="Drag" component={DragExample} />
				<Stack.Screen name="Todo" component={Todo} />
				<Stack.Screen name="SandboxFlex" component={SandboxFlex} />
				<Stack.Screen name="ImagesPage" component={ImagesPage} />
				<Stack.Screen name="PressableAndTouchablePage" component={PressableAndTouchablePage} />
				<Stack.Screen name="ModalPage" component={ModalPage} />
				<Stack.Screen name="StatusBarPage" component={StatusBarPage} />
				<Stack.Screen name="AlertPage" component={AlertPage} />
				<Stack.Screen name="DimensionsPage" component={DimensionsPage} />
				<Stack.Screen name="SafeAreaAndPlatformSpecific" component={SafeAreaAndPlatformSpecific} />
				<Stack.Screen name="GameCardsPage" component={GameCardsPage} />
				<Stack.Screen name="SectionListPage" component={SectionListPage} />
				<Stack.Screen name="TextInputPage" component={TextInputPage} />
				<Stack.Screen name="SwitchPage" component={SwitchPage} />
				<Stack.Screen name="NewLoginFormPage" component={NewLoginFormPage} />
				<Stack.Screen name="NetworkGetDataPage" component={NetworkGetDataPage} />
				<Stack.Screen name="NetworkPostDataPage" component={NetworkPostDataPage} />
				<Stack.Screen
					name="NavigationPassParamsPage"
					component={NavigationPassParamsPage}
					// Передача параметра по-умолчанию
					initialParams={{ message: 'сообщение по-умолчанию' }}
					options={{
						title: 'Кастомный заголовок',
						headerStyle: { backgroundColor: '#6a51ae' },
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 25,
						},
						headerRight: () => (<Button title='меню'></Button>),
						// стиль содержимого этого экрана
						contentStyle: { backgroundColor: '#e8e4ff' }
					}}
				/>
				<Stack.Screen name="OptionsListPage" component={OptionsListPage} />
			</Stack.Navigator>
		</NavigationContainer >
	);
}

const styles = StyleSheet.create({
});
