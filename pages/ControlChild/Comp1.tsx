import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IComp1Props {
	onPress: () => void
}

export default function Comp1(props: IComp1Props) {


	return (
		<View>
			<Text>Comp1</Text>
			<Button
				title='Активация 1 способом'
				onPress={props.onPress}
			/>
		</View>
	)
}


const styles = StyleSheet.create({})