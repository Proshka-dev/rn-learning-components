import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import { demoGrouppedData } from '../../data/demoGrouppedData';

export default function SectionListPage() {

	const grouppedData = demoGrouppedData;

	return (
		<SafeAreaView style={styles.safeContainer}>
			<SectionList
				sections={grouppedData} //Важно, чтобы было свойство data, содержащее в себе элементы данной группы
				renderItem={(value) => (<Text>{value.item}</Text>)}
				renderSectionHeader={
					(value) => (<Text style={styles.listSectionHeader}>{value.section.type}</Text>)
				}
				ItemSeparatorComponent={() => (<View style={styles.listSeparator} />)}
				SectionSeparatorComponent={() => (<View style={styles.sectionSeparator} />)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		paddingHorizontal: 30,
	},
	list: {
		flex: 1,
		backgroundColor: '#ddd',
		borderColor: 'green',
		borderWidth: 2,
		borderStyle: 'dashed',
	},
	listSectionHeader: {
		borderWidth: 1,
		marginTop: 20,
		fontWeight: 'bold',
	},
	listSeparator: {
		height: 10,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderColor: 'green',

	},
	sectionSeparator: {
		height: 10,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderColor: 'red',

	}
});
