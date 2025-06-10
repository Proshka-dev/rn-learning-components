import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function NetworkGetDataPage() {

	return (
		<SafeAreaView style={styles.safeContainer}>
			<Text>NetworkGetDataPage</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		padding: 30,
	},
});
