import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TCardData } from '../../data/cardsData';

type TGameCardProps = {
    cardData: TCardData
}


export default function GameCard(props: TGameCardProps) {

    const [cardWidth, setCardWidth] = useState(0);

    const styles = StyleSheet.create({
        font: {
            fontWeight: '700',
            fontFamily: 'Windlass-Extended',
        },

        container: {
            borderWidth: 0.048 * cardWidth,
            borderColor: 'rgb(255, 207, 79)',
            backgroundColor: 'rgb(74, 27, 17)',
            width: '100%',
            height: 1.5536 * cardWidth,
            borderRadius: 0.1464 * cardWidth,
            padding: 0.014 * cardWidth,
        },
        body: {
            backgroundColor: 'white',
            borderRadius: 0.085 * cardWidth,
            overflow: 'hidden',
            flex: 1,
            alignItems: 'center',
        },
        enName: {},
        enNameText: {},
        bonus: {},
        bonusText: {},
        name: {},
        nameText: {},
        picture: {},
        footer: {},
    });

    return (
        <View
            style={styles.container}
            onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)} // Получение ширины
        >
            <View style={styles.body}>
                <View style={styles.enName}>
                    <Text style={[styles.enNameText, styles.font]}>
                        {props.cardData.enName}
                    </Text>
                </View>
                <View style={styles.bonus}>
                    <Text style={[styles.bonusText, styles.font]}>
                        {props.cardData.bonus}
                    </Text>
                </View>
                <View style={styles.name}>
                    <Text style={[styles.nameText, styles.font]}>
                        {props.cardData.name}
                    </Text>
                </View>
                <View style={styles.picture}>
                    <Text>
                        {props.cardData.picture}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Text>footer</Text>
                </View>
            </View>
        </View>
    );
}

