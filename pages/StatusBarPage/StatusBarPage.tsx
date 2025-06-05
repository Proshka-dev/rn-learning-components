import { Image, StyleSheet, Text, View, ImageBackground, Pressable, TouchableHighlight, TouchableOpacity, Modal, StatusBar, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import type { StatusBarStyle } from 'react-native';

export default function StatusBarPage() {

	const [barStyle, setBarStyle] = useState<StatusBarStyle>('default');
	const [indicatorIsAnimating, setIndicatorIsAnimating] = useState<boolean>(true);


	function handlerOnPressChangeBarStyle() {
		setBarStyle((prevValue) => {
			switch (prevValue) {
				case 'default':
					return 'dark-content';

				case 'dark-content':
					return 'light-content';

				default:
					return 'default';
			}
		});
	}

	function handlerOnPressChangeIndicatorAnimating() {
		setIndicatorIsAnimating((value) => (!value));
	}


	return (
		<View style={styles.container}>
			<StatusBar
				hidden={false}
				backgroundColor={'lightgreen'} //only at Android
				barStyle={barStyle} //both platforms
			/>

			<TouchableOpacity onPress={handlerOnPressChangeBarStyle} style={styles.buttonElement}>
				<Text>Toggle bar style ({barStyle})</Text>
			</TouchableOpacity>

			<View style={styles.divider} >
			</View>

			<View>
				<Text>ActivityIndicators:</Text>
			</View>

			<View style={styles.panelOfActivityIndicator} >
				<Text>default</Text>
				<ActivityIndicator />
			</View>

			<View style={styles.panelOfActivityIndicator} >
				<Text>{`size={ 'small'}`}</Text>
				<ActivityIndicator size={'small'} />
			</View>

			<View style={styles.panelOfActivityIndicator} >
				<Text>{`size={ 'large'} color={'orange'}`}</Text>
				<ActivityIndicator size={'large'} color={'orange'} animating={indicatorIsAnimating} />
			</View>

			<TouchableOpacity onPress={handlerOnPressChangeIndicatorAnimating} style={styles.buttonElement}>
				<Text>Toggle animating ({String(indicatorIsAnimating)})</Text>
			</TouchableOpacity>


		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
		borderColor: 'green',
		borderWidth: 4,
		borderStyle: 'dashed',
		alignItems: 'center',
		padding: 20,
		gap: 10,
	},
	buttonElement: {
		backgroundColor: 'lightblue',
		padding: 7,
		width: 200,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
	},
	panelOfActivityIndicator: {
		flexDirection: 'row',
		gap: 20,
	},
	divider: {
		backgroundColor: 'grey',
		height: 3,
		width: "100%",
	}

});
