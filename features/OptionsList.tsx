import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react'
import Option, { TOptionProps } from './Option';

type TOptionListProps = {
	children: ReactNode;
	selectedValue: string;
	onChange: (value: string) => void;
	style?: StyleProp<ViewStyle>;
}

export default function OptionsList(props: TOptionListProps) {

	const mappedChildren = Children.map(props.children, child => {
		if (isValidElement<TOptionProps>(child)) {
			return (
				<TouchableOpacity onPress={() => props.onChange(child.props.value)}>
					{cloneElement(child, { checked: (child.props.value == props.selectedValue) })}
				</TouchableOpacity>
			)
		};
		return child; // Возвращаем другие элементы как есть
	}
	);

	return (
		<View style={props.style}>
			{mappedChildren}
		</View>
	)
}

const styles = StyleSheet.create({})