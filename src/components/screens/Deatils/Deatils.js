import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; // For responsive font sizes

// Get the screen width and height
const { width, height } = Dimensions.get('window');

export default function Details({ route }) {
  const navigation = useNavigation();
  const data = route.params;
  const all = data.data;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {all.Bol ? (
        <Image source={all.image} style={styles.image} />
      ) : (
        <ImageBackground
          source={{ uri: all.image }}
          style={styles.imageBackground}
          imageStyle={styles.backgroundImage}
        >
          {all.date && 
          <View style={styles.circle}>
            <Text style={styles.circleText}>{all.date}</Text>
          </View>
         }
        </ImageBackground>
      )}

      <View>
        <Text style={styles.title}>{all.titel}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.returnButton}
      >
        {/* <Text style={styles.returnButtonText}>Return</Text> */}
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            {all.isDes ? (
              <Text style={{letterSpacing: 2, lineHeight: 30 , textAlign:'center'}}>
                Liens émotionnels et humains entre l’Algérie et le Qatar : une présence qui renforce des relations de respect mutuel.

Le Salon International du Livre d’Alger 2024 est honoré d’accueillir l’État du Qatar en tant qu’invité d’honneur, en reconnaissance de la profondeur des relations algéro-qataries, basées sur un respect mutuel qui dure depuis des décennies. Le Qatar a soutenu la révolution algérienne, tant matériellement que moralement, à travers des campagnes de dons et en fournissant des moyens logistiques pour la délégation du gouvernement provisoire de la République algérienne qui négociait avec la partie française en Suisse pour décider du sort de l’Algérie. À cette époque, le peuple qatari soutenait le mouvement des moudjahidines algériens : dans les écoles, les étudiants chantaient des hymnes nationaux algériens, et les rassemblements étudiants dénonçaient la colonisation française.

Ces liens émotionnels et humains sont restés le ciment des relations qataro-algériennes à tous les niveaux. Les échanges commerciaux et culturels se sont intensifiés, et les relations entre les deux pays ont connu un développement notable ces dernières années, notamment après la visite du Président de la République, M. Abdelmadjid Tebboune, au Qatar en novembre 2022, coïncidant avec la Coupe du Monde de la FIFA 2022. Cette visite, ainsi que d’autres visites mutuelles entre les dirigeants des deux pays, reflète une vision commune pour une coopération accrue dans tous les domaines.

Dans le domaine des investissements, les grands projets qataris en Algérie, comme le projet de développement des terres dans le sud algérien et le projet d’hôpital algéro-qatari-allemand, illustrent le partenariat solide entre les deux pays. La relation ne se limite pas à l’aspect économique ; elle s’étend aussi aux domaines culturel et scientifique, où la présence d’un grand nombre de journalistes et de professeurs universitaires algériens au Qatar témoigne de la confiance que l’État qatari accorde aux élites algériennes.

Le ministère de la Culture du Qatar travaille à renforcer la présence culturelle de l’État sur la scène régionale et internationale, croyant au rôle de la diplomatie culturelle dans le rapprochement des peuples, à travers l’organisation et le soutien d’initiatives culturelles et artistiques variées. Parmi ses réalisations marquantes :

Prix national de littérature pour enfants : un prix annuel international qui encourage la créativité des enfants et leur engagement dans la littérature.
Prix national d’excellence : un hommage annuel aux personnalités qataries remarquables qui ont laissé leur empreinte dans les domaines de la culture et des arts.
Salon international du livre de Doha : une grande plateforme culturelle qui accueille chaque année de nombreuses maisons d’édition et auteurs de différents pays, et qui est l’un des salons littéraires les plus importants de la région.
Échange de semaines culturelles avec des pays frères et amis, visant à renforcer les liens entre créateurs et à promouvoir les relations culturelles.
Dans le cadre de la promotion des relations culturelles et de l’importance du livre pour diffuser la connaissance et favoriser le rapprochement, le Qatar est accueilli en tant qu’invité d’honneur au Salon International du Livre d’Alger, où un riche programme culturel sera proposé, reflétant la créativité des Qataris dans la littérature, la pensée et la traduction, en collaboration avec leurs frères algériens, pour renforcer les liens historiques et culturels entre les deux pays frères.
                {/* The rest of your long text */}
              </Text>
            ) : (
              <Text style={{letterSpacing: 4,width:'100%' ,  textAlign:'center',lineHeight: 30}}>{all.des}</Text>
            )}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.footerButtonText}>Retour</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    position: 'relative',
    width: '100%',
    height: height * 0.3,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    left: width * 0.35,
    bottom: -height * 0.02,
    width: 130,
    height: 36,
    backgroundColor: 'rgb(1, 150, 150)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: RFValue(24), // Responsive font size
    fontWeight: 'bold',
    padding: 5,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: RFValue(16), // Responsive font size
    color: '#333',
    textAlign: 'left',
  },
  returnButton: {
    position: 'absolute',
    backgroundColor: 'rgb(1, 150, 150)',
    padding: 10,
    left: 3,
    top: -220,
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  returnButtonText: {
    color: 'white',
    fontSize: RFValue(12), // Responsive font size
  },
  footerButton: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgb(1, 150, 150)',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: RFValue(16), // Responsive font size
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Keeps the image aspect ratio intact
  },
});
