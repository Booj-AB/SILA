import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import imageMain from '../../../assets/Images/ImageMain.jpg';

export default function SponsorTwo() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Sponsors</Text>
      <View style={styles.partnersContainer}>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
        </View>
        <View style={styles.partnerImageWrapper}>
          <Image source={imageMain} style={styles.partnerImage} />
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
        color: 'rgb(1, 175, 234)',
        fontWeight:'bold'
    },
});
