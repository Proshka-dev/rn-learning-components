import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
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

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
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
			</Stack.Navigator>
		</NavigationContainer >
	);
}

const styles = StyleSheet.create({
});
