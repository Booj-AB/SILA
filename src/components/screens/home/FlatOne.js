import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';
import image from '../../../assets/Images/ImageMain.jpg';
import Card from './Card';
import {colors, icons, images} from '../../constants';

export default function FlatOne() {
    const sections = [
        {
            id: '1',
            image,
            titel: 'One',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo sem, sagittis quis velit id, hendrerit facilisis metus. Sed sed risus iaculis, sodales orci consectetur, vulputate m',
            date: '12-09-2024',
        },
        {
            id: '2',
            image,
            titel: 'Two',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo sem, sagittis quis velit id, hendrerit facilisis metus. Sed sed risus iaculis, sodales orci consectetur, vulputate m',
            date: '12-09-2024',
        },
        {
            id: '3',
            image,
            titel: 'Three',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo sem, sagittis quis velit id, hendrerit facilisis metus. Sed sed risus iaculis, sodales orci consectetur, vulputate m',
            date: '11-11-2001',
        },
        {
            id: '4',
            image,
            titel: 'Four',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo sem, sagittis quis velit id, hendrerit facilisis metus. Sed sed risus iaculis, sodales orci consectetur, vulputate m',
            date: '11-7-2013',
        },
    ];

    const fadeAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000, 
            useNativeDriver: true, 
        }).start();
    }, [fadeAnim]);

    return (
        <View>
            <Text style={styles.title}>
                Dernières nouvelles
            </Text>
            <Animated.View style={{ opacity: fadeAnim }}>
                <FlatList
                    data={sections}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Card
                                titel={item.titel}
                                image={item.image}
                                des={item.des}
                                date={item.date}
                            />
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    stickySectionHeadersEnabled={false} 
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color:colors.primary,
        textAlign: 'center',
        marginVertical: 10,
    },
    cardContainer: {
        width: 300, 
        marginHorizontal: 5,
    },
    title: {
        marginBottom: 25,
        color:colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
