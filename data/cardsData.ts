export type TCardData = {
    enName: string,
    bonus: number,
    name: string,
    picture: string,
    big: boolean,
    slot: '1 Рука' | '2 Руки' | 'Обувка' | 'Головняк' | 'Броник',
    price: number,
}

export const cardsData: TCardData[] = [
    {
        enName: 'Chainsaw of Bloody Dismemberment',
        bonus: 3,
        name: 'Бензопила Кровавого Расчленения',
        picture: '../assets/gamecards/gamecard01.png',
        big: true,
        slot: '2 Руки',
        price: 600
    }
]