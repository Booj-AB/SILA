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
                    Liens émotionnels et humains entre l’Algérie et le Qatar : une présence qui renforce des relations de respect mutuel.
                       </Text>
                       <Text style={styles.description}>
                       Le Salon International du Livre d’Alger 2024 est honoré d’accueillir l’État du Qatar en tant qu’invité d’honneur, en reconnaissance de la profondeur des relations algéro-qataries, basées sur un respect mutuel qui dure depuis des décennies. Le Qatar a soutenu la révolution algérienne, tant matériellement que moralement, à travers des campagnes de dons et en fournissant des moyens logistiques pour la délégation du gouvernement provisoire de la République algérienne qui négociait avec la partie française en Suisse pour décider du sort de l’Algérie. À cette époque, le peuple qatari soutenait le mouvement des moudjahidines algériens : dans les écoles, les étudiants chantaient des hymnes nationaux algériens, et les rassemblements étudiants dénonçaient la colonisation française.
                      </Text>
                      <Text style={styles.description}>
                      Ces liens émotionnels et humains sont restés le ciment des relations qataro-algériennes à tous les niveaux. Les échanges commerciaux et culturels se sont intensifiés, et les relations entre les deux pays ont connu un développement notable ces dernières années, notamment après la visite du Président de la République, M. Abdelmadjid Tebboune, au Qatar en novembre 2022, coïncidant avec la Coupe du Monde de la FIFA 2022. Cette visite, ainsi que d’autres visites mutuelles entre les dirigeants des deux pays, reflète une vision commune pour une coopération accrue dans tous les domaines.
                      </Text>
                      {/* <Text style={styles.description}>
                      Dans le domaine des investissements, les grands projets qataris en Algérie, comme le projet de développement des terres dans le sud algérien et le projet d’hôpital algéro-qatari-allemand, illustrent le partenariat solide entre les deux pays. La relation ne se limite pas à l’aspect économique ; elle s’étend aussi aux domaines culturel et scientifique, où la présence d’un grand nombre de journalistes et de professeurs universitaires algériens au Qatar témoigne de la confiance que l’État qatari accorde aux élites algériennes...................
                      </Text> */}
                      {/* <Text style={styles.description}>
                      Le ministère de la Culture du Qatar travaille à renforcer la présence culturelle de l’État sur la scène régionale et internationale, croyant au rôle de la diplomatie culturelle dans le rapprochement des peuples, à travers l’organisation et le soutien d’initiatives culturelles et artistiques variées. Parmi ses réalisations marquantes :
                      </Text>
                      <Text style={styles.description}>
                      Prix national de littérature pour enfants : un prix annuel international qui encourage la créativité des enfants et leur engagement dans la littérature.
                      </Text>
                      <Text style={styles.description}>
                      Prix national d’excellence : un hommage annuel aux personnalités qataries remarquables qui ont laissé leur empreinte dans les domaines de la culture et des arts.
                      </Text>
                      <Text style={styles.description}>
                      Salon international du livre de Doha : une grande plateforme culturelle qui accueille chaque année de nombreuses maisons d’édition et auteurs de différents pays, et qui est l’un des salons littéraires les plus importants de la région.
                      </Text>
                      <Text style={styles.description}>
                      Échange de semaines culturelles avec des pays frères et amis, visant à renforcer les liens entre créateurs et à promouvoir les relations culturelles.
                      </Text>
                      <Text style={styles.description}>
                      Dans le cadre de la promotion des relations culturelles et de l’importance du livre pour diffuser la connaissance et favoriser le rapprochement, le Qatar est accueilli en tant qu’invité d’honneur au Salon International du Livre d’Alger, où un riche programme culturel sera proposé, reflétant la créativité des Qataris dans la littérature, la pensée et la traduction, en collaboration avec leurs frères algériens, pour renforcer les liens historiques et culturels entre les deux pays frères.
                      </Text> */}
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
