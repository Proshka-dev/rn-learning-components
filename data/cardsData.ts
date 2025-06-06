import { ImageSourcePropType } from "react-native";

export type TCardData = {
    id: number,
    enName: string,
    bonus: number,
    name: string,
    picture: ImageSourcePropType,
    big: boolean,
    slot: '1 Рука' | '2 Руки' | 'Обувка' | 'Головняк' | 'Броник',
    price: number,
}

export const cardsData: TCardData[] = [
    {
        id: 1,
        enName: 'Chainsaw of Bloody Dismemberment',
        bonus: 3,
        name: 'Бензопила Кровавого Расчленения',
        picture: require('../assets/gamecards/gamecard01.png'),
        big: true,
        slot: '2 Руки',
        price: 600
    },
    {
        id: 2,
        enName: 'Boots of Butt-Kicking',
        bonus: 2,
        name: 'Башмаки Могучего Пенделя',
        picture: require('../assets/gamecards/gamecard02.png'),
        big: false,
        slot: 'Обувка',
        price: 400
    },
    {
        id: 3,
        enName: 'Buckler of Swashing',
        bonus: 2,
        name: 'Пафосный Баклер',
        picture: require('../assets/gamecards/gamecard03.png'),
        big: false,
        slot: '1 Рука',
        price: 400
    },
]