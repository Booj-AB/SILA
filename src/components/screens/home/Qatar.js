import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import image from '../../../assets/Images/ImageMain.jpg';

const { width } = Dimensions.get('window');

export default function Qatar() {
    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current; 

    // Animate when component mounts
    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000, 
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 8, 
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Pays à l’honneur</Text>
            <View style={styles.contentContainer}>
          
                <Animated.View style={[styles.imageContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
                    <Image source={image} style={styles.image} />
                </Animated.View>

                <View style={styles.textContainer}>
                    <Text style={styles.countryTitle}>Qatar</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor, sit amet consectetur</Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptatem illum
                        molestiae amet? Voluptates quaerat quidem architecto aut dignissimos pariatur nulla
                        porro quo consequuntur sunt? Id corrupti adipisci consequuntur vitae!
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lire Plus +</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        marginVertical: 20,
        color: 'rgb(1, 175, 234)',
    },
    contentContainer: {
        flexDirection: 'row',
        width: '90%',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageContainer: {
        width: width > 600 ? '45%' : '100%', 
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5, 
    },
    image: {
        width: '100%',
        height: 200, 
        borderRadius: 10,
    },
    textContainer: {
        width: width > 600 ? '45%' : '100%',
        padding: 10,
        borderColor: 'rgb(104, 1, 151)',
        borderWidth: 1,
        borderRadius: 10,
    },
    countryTitle: {
        fontSize: 24,
        color: 'rgb(104, 1, 151)',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: 'gray',
    },
    button: {
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: 'rgb(104, 1, 151)',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
