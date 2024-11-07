import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import image from '../../../assets/Images/ImageMain.png';
import {colors, icons, images} from '../../constants';
import { useNavigation } from '@react-navigation/native';
import qata from '../../../assets/Images/qata.jpg'
const { width } = Dimensions.get('window');

export default function Qatar() {
    // Animation values
    const navigation = useNavigation()
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



    const data = {
        titel :'Pays à l’honneur' ,
        image : qata , 
        Bol : true ,
        date : 'Qatar',
        isDes : true
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Pays à l’honneur</Text>
            <View style={styles.contentContainer}>
          
                <Animated.View style={[styles.imageContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
                    <Image source={qata} style={styles.image} />
                </Animated.View>

                <View style={styles.textContainer}>
                    <Text style={styles.countryTitle}>Qatar</Text>
                    <Text style={styles.subtitle}>Le Qatar, Pays à l’honneur</Text>
                    <Text style={styles.description}>
                      Liens émotionnels et humains entre l'Algérie et le Qatar : une présence qui renforce des relations de respect mutuel. Le Salon International du Livre d'Alger 2024 est honoré d'accueillir l'État du Qatar en tant qu'invité d'honneur, en reconnaissance de la profondeur des relations algéro-qataries, basées sur un respect mutuel qui dure depuis des décennies. Le Qatar a soutenu la révolution algérienne, tant matériellement que moralement, à travers des campagnes de dons et en fournissant des moyens...
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Details', { data })}>
                        <Text style={styles.buttonText}>Lire Plus</Text>
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
        fontWeight:'bold',
        color: colors.primary,
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
        borderColor: '#8A1538',
        borderWidth: 1,
        borderRadius: 10,
    },
    countryTitle: {
        fontSize: 24,
        color: '#8A1538',
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
        backgroundColor: '#8A1538',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
