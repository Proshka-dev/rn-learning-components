import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { StyledInput } from '../../shared/StyledInput/StyledInput';
import { StyledButton } from '../../shared/StyledButton/StyledButton';

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.title} >Вход в аккаунт</Text>
                <View style={styles.form}>
                    <StyledInput
                        placeholder='login'
                    />
                    <StyledInput
                        placeholder='password'
                        isPassword
                    />

                    {/* Настройка темы статус бара */}
                    <StatusBar barStyle={'dark-content'}></StatusBar>


                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    },
    body: {
        gap: 20,
        alignItems: 'center',
    },
    form: {
        gap: 20,
        width: 250,
    },
    login: {
        backgroundColor: 'lightgrey',
        padding: 10,
    },
    password: {
        backgroundColor: 'lightgrey',
        padding: 10,
    },
    logo: {
        // width: 100,
        // height: 100,
        resizeMode: 'stretch',

    }
});
