import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import imageMain from '../../../assets/Images/ImageMain.jpg';
import {colors, icons, images} from '../../constants';

export default function SponsorOne() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Sponsors officiels</Text>
      <View style={styles.partnersContainer}>
        <View style={styles.partnerImageWrapper}>
          <Image source={images.sponsorOficiel} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={images.sponsorOficiel} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={images.sponsorOficiel} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={images.sponsorOficiel} style={styles.partnerImage} />
        </View>
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
        color: colors.primary,
        fontWeight:'bold'
    },
});
