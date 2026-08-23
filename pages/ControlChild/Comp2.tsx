import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

interface IComp2Props {
	sendMessageTrigger: null | boolean;
}

//Сделать через useImperativeHandle, useContext и state родителя !!!!!!!!!!!!


export default function Comp2(props: IComp2Props) {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (props.sendMessageTrigger !== null) showHi('(1 способ)')
	}, [props.sendMessageTrigger])

	function showHi(addMessage: string) {
		console.log(`Hi from Comp1 ${addMessage}`);
	}

	return (
		<View>
			<Text>Comp2</Text>
			<Text>counter: {counter}</Text>
			<Button title='add counter' onPress={() => (setCounter(counter + 1))} />
		</View>

	)
}

const styles = StyleSheet.create({})