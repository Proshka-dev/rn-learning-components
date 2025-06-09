// Не используется

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

type TAlbum = {
    userId: number;
    id: number;
    title: string;
}

const AlbumList = () => {
    const [albums, setAlbums] = useState<TAlbum[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Получение данных
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                // Отправляем GET-запрос
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/albums'
                );
                setAlbums(response.data);
                setError('');
            } catch (err) {
                // Обработка ошибок
                setError('Ошибка при загрузке данных');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []); // Пустой массив зависимостей = запуск при монтировании

    // Состояние загрузки
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }
            }>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Обработка ошибок
    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }
            }>
                <Text style={{ color: 'red' }}> {error} </Text>
            </View>
        );
    }

    // Отображение данных
    return (
        <FlatList
            data={albums}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ padding: 15, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}> {item.title} </Text>
                    < Text > ID: {item.id}, User ID: {item.userId} </Text>
                </View>
            )}
        />
    );
};

export default AlbumList;
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    list: {
        flex: 1,
        backgroundColor: '#ddd',
        borderColor: 'green',
        borderWidth: 2,
        borderStyle: 'dashed',
        paddingHorizontal: 30,
    },
});
