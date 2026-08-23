import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useImperativeHandle, useState } from 'react'

interface IComp2Props {
	ref: React.RefObject<TImperativeHandle>
}

export type TImperativeHandle = null | {
	sendLogMessage: () => void;
}

export default function CompC2(props: IComp2Props) {

	useImperativeHandle(props.ref, () => {
		return {
			sendLogMessage() { showHi('(3 способ)') }
		}
	})

	const [counter, setCounter] = useState(0);

	function showHi(addMessage: string) {
		console.log(`Hi from Comp1 ${addMessage}`);
	}

	return (
		<View>
			<Text>Comp2</Text>
			<Text>counter: {counter}</Text>
			<Button title='add counter' onPress={() => (setCounter((val) => (val + 1)))} />
		</View>

	)
}

const styles = StyleSheet.create({})