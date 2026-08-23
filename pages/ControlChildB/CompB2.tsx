import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ShowChildMessageContext } from './ControlChildB';

interface IComp2Props {
}

//Сделать через useImperativeHandle, useContext и state родителя !!!!!!!!!!!!


export default function CompB2(props: IComp2Props) {

	const [counter, setCounter] = useState(0);

	const context = useContext(ShowChildMessageContext);

	useEffect(() => {
		if (context.value !== null) showHi('(2 способ)')
	}, [context.value])

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