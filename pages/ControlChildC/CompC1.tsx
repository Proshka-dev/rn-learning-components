import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useImperativeHandle } from 'react'

interface IComp1Props {
	sendConsoleMessage: () => void;
}

export default function CompC1(props: IComp1Props) {


	return (
		<View>
			<Text>Comp1</Text>
			<Button
				title='Активация 3 способом'
				onPress={() => props.sendConsoleMessage()}
			/>
		</View>
	)
}


const styles = StyleSheet.create({})