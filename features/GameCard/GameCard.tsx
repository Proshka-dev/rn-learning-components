import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TCardData } from '../../data/cardsData';
import { StyledFirstletterText } from '../../shared/StyledFirstletterText/StyledFirstletterText';

type TGameCardProps = {
    cardData: TCardData
}

export default function GameCard(props: TGameCardProps) {

    const [cardWidth, setCardWidth] = useState(0);

    const stylesDinamic = StyleSheet.create({
        container: {
            borderWidth: 0.048 * cardWidth,
            height: 1.5536 * cardWidth,
            borderRadius: 0.1464 * cardWidth,
            padding: 0.014 * cardWidth,
        },
        body: {
            borderRadius: 0.085 * cardWidth,
        },
    });

    return (
        <View
            style={[styles.container, stylesDinamic.container]}
            onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)} // Получение ширины
        >
            <View style={[styles.body, stylesDinamic.body]}>

                <View style={styles.enName}>
                    <StyledFirstletterText style={[styles.enNameText, styles.font]} styleFirstLetter={[styles.enNameTextFirstLetter, styles.font]}>
                        {props.cardData.enName}
                    </StyledFirstletterText>
                </View>

                <View style={styles.bonus}>
                    <Text style={[styles.bonusTextFirstLetter, styles.font]}>
                        {`+${props.cardData.bonus} `}
                    </Text>
                    <StyledFirstletterText style={[styles.bonusText, styles.font]} styleFirstLetter={[styles.bonusTextFirstLetter, styles.font]}>
                        Бонус
                    </StyledFirstletterText>
                </View>

                <View style={styles.name}>
                    <StyledFirstletterText style={[styles.nameText, styles.font]} styleFirstLetter={[styles.nameTextFirstLetter, styles.font]}>
                        {props.cardData.name}
                    </StyledFirstletterText>
                </View>

                <View style={styles.pictureContainer}>
                    <Image
                        //source={imageMap[1]}
                        source={props.cardData.picture}
                        style={styles.mainCardImage}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerLeftColumn}>
                        <Text style={[styles.footerBigItem, styles.font]}>
                            {props.cardData.big && 'Большая'}
                        </Text>
                        <Text style={[styles.footerItemSlot, styles.font]}>
                            {props.cardData.slot}
                        </Text>
                    </View>
                    <Text style={[styles.footerRightColumn, styles.font]}>
                        {`${props.cardData.price} Голдов`}
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Windlass-Extended',
    },

    container: {
        borderColor: 'rgb(255, 207, 79)',
        backgroundColor: 'rgb(74, 27, 17)',
        width: '100%',
    },
    body: {
        backgroundColor: 'white',
        overflow: 'hidden',
        flex: 1,
        alignItems: 'center',
    },
    enName: {
    },
    enNameText: {
        fontSize: 10,
        textTransform: 'uppercase',
    },
    enNameTextFirstLetter: {
        fontSize: 12,
        textTransform: 'uppercase',
    },
    bonus: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    bonusText: {
        fontSize: 15,
        textTransform: 'uppercase',
    },
    bonusTextFirstLetter: {
        fontSize: 20,
        textTransform: 'uppercase',
    },
    name: {
    },
    nameText: {
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    nameTextFirstLetter: {
        fontSize: 32,
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: 40,

    },
    pictureContainer: {
        flex: 1,
        width: '100%',
        height: 300,
    },
    mainCardImage: {
        width: '100%',
        height: '100%',
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
    },
    footerLeftColumn: {

    },
    footerRightColumn: {
        fontSize: 19,
    },
    footerBigItem: {
        fontSize: 19,
        lineHeight: 19,
    },
    footerItemSlot: {
        fontSize: 19,
    },
});
