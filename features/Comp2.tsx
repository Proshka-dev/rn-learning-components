import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Comp2(props) {
	return (
		<View>
			<Text>Comp2</Text>
			<Button
				title='Нажми меня'
				onPress={props.onPress}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})