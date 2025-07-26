import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function Comp1() {

	function showHi() {
		console.log('Hi from Comp1');
	}

	//Сделать через useImperativeHandler, useContext и state родителя !!!!!!!!!!!!
	return (
		<View>
			<Text>Comp1</Text>
		</View>
	)
}

const styles = StyleSheet.create({})