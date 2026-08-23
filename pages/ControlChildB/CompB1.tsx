import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ShowChildMessageContext } from './ControlChildB'

interface IComp1Props {
}

export default function CompB1(props: IComp1Props) {

	const context = useContext(ShowChildMessageContext);

	return (
		<View>
			<Text>Comp1</Text>
			<Button
				title='Активация 2 способом'
				onPress={() => context.setValue()}
			/>
		</View>
	)
}


const styles = StyleSheet.create({})