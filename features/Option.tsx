import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'

export type TOptionProps = {
	value: string;
	checked?: boolean;
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
}

export default function Option(props: TOptionProps) {
	return (
		<View style={[props.style, props.checked && styles.selected]}>
			{props.children}
		</View>
	)
}

Option.displayName = 'OptionComponent';

const styles = StyleSheet.create({
	selected: {
		backgroundColor: 'lightblue',
	}
})