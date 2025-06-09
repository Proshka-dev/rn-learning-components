import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StyledButton } from '../../shared/StyledButton/StyledButton';
import { ViewAnimatedFadeIn } from '../../shared/AnimFadeinText/AnimFadeinText';

// Шрифты
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();


export default function Home({ navigation }) {

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
                    title='PressableAndTouchablePage'
                    onPress={() => navigation.navigate('PressableAndTouchablePage')}
                />

                <StyledButton
                    title='ModalPage'
                    onPress={() => navigation.navigate('ModalPage')}
                />

                <StyledButton
                    title='StatusBar and ActivityIndicator page'
                    onPress={() => navigation.navigate('StatusBarPage')}
                />

                <StyledButton
                    title='AlertPage'
                    onPress={() => navigation.navigate('AlertPage')}
                />

                <StyledButton
                    title='DimensionsPage'
                    onPress={() => navigation.navigate('DimensionsPage')}
                />

                <StyledButton
                    title='SafeAreaAndPlatformSpecific'
                    onPress={() => navigation.navigate('SafeAreaAndPlatformSpecific')}
                />

                <StyledButton
                    title='GameCardsPage'
                    onPress={() => navigation.navigate('GameCardsPage')}
                />

                <StyledButton
                    title='SectionListPage'
                    onPress={() => navigation.navigate('SectionListPage')}
                />

                <StyledButton
                    title='TextInputPage'
                    onPress={() => navigation.navigate('TextInputPage')}
                />

                <StyledButton
                    title='SwitchPage'
                    onPress={() => navigation.navigate('SwitchPage')}
                />

                <StyledButton
                    title='NewLoginFormPage'
                    onPress={() => navigation.navigate('NewLoginFormPage')}
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
