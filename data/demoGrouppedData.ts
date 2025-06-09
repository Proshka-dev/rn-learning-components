import { ImageSourcePropType } from "react-native";

export type TDemoGrouppedData = {
    id: number,
    type: string,
    data: string[],
}

export const demoGrouppedData: TDemoGrouppedData[] = [
    {
        id: 1,
        type: 'канцелярия',
        data: ['карандаш', 'ручка', 'линейка'],
    },
    {
        id: 2,
        type: 'продукты',
        data: ['хлеб', 'молоко', 'масло', 'колбаса'],
    },
    {
        id: 3,
        type: 'техника',
        data: ['компьютер', 'телевизор'],
    },
    {
        id: 4,
        type: 'растения',
        data: ['береза', 'роза', 'ландыш'],
    },

]