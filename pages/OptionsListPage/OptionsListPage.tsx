import { Button, StyleSheet, Text, View } from 'react-native';
import OptionsList from '../../features/OptionsList';
import Option from '../../features/Option';
import { useState } from 'react';

export default function OptionsListPage() {

	const [optionsListSelectedValue, setOptionsListSelectedValue] = useState('female');

	function onChangeOption(value: string) {
		console.log(`Выбрана опция: ${value}`);
		setOptionsListSelectedValue(value);
	}

	return (
		<View style={styles.container}>
			<Text>OptionsListPage</Text>

			<OptionsList selectedValue={optionsListSelectedValue} onChange={onChangeOption} style={styles.list}>
				<Option value={'male'} style={styles.listItem}>
					<Text>male</Text>
				</Option>
				<Option value={'female'} style={styles.listItem}>
					<Text>female</Text>
				</Option>
				<Option value={'quadrober'} style={styles.listItem}>
					<Text>quadrober</Text>
				</Option>
				<Option value={'quadrober2'} style={styles.listItem}>
					<View>
						<Text>quadrober2</Text>
						<Button title='подписаться' />
					</View>
				</Option>
			</OptionsList>

			<Button
				title={'Send to server'}
				onPress={() => { console.log(`Sending to server. Gender is: ${optionsListSelectedValue}`) }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	list: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		gap: 10,
	},

	listItem: {
		backgroundColor: 'lightgrey',
		borderColor: 'black',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 5,
		padding: 10,


	}

});
