import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import imageMain from '../../../assets/Images/ImageMain.png';
import {colors, icons, images} from '../../constants';

export default function SponsorTwo() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Sponsors</Text>
      <View style={styles.partnersContainer}>
        <View style={styles.partnerImageWrapper}>
          <Image resizeMode='contain' source={images.sponsors1} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image resizeMode='contain' source={images.sponsors2} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
<<<<<<< HEAD
          <Image  resizeMode='contain' source={images.sponsors3} style={styles.partnerImage} />
=======
          <Image resizeMode='contain' source={images.sponsors3} style={styles.partnerImage} />
>>>>>>> 41aa71ad6224bfa024c13c3af7ba46794cba53cd
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image resizeMode='contain' source={images.sponsors4} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
<<<<<<< HEAD
          <Image  resizeMode='contain' source={images.sponsors5} style={styles.partnerImage} />
=======
          <Image resizeMode='contain' source={images.sponsors5} style={styles.partnerImage} />
>>>>>>> 41aa71ad6224bfa024c13c3af7ba46794cba53cd
        </View>
     
      </View>  <View style={{
        marginBottom:100,
       }}>

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center', 
  },
  partnersContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
  },
  partnerImageWrapper: {
    width: '45%', 
    marginBottom: 10,
  },
  partnerImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, 
  },
   title: {
        textAlign: 'center',
        fontSize: 32,
        marginVertical: 20,
        color:colors.primary,
        fontWeight:'bold'},
});
