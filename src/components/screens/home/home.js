import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Animated, FlatList, Dimensions } from 'react-native';
import Circel from './Circel';
import PartyPro from './PartyPro';
import FlatTwo from './FlatTwo';
import Parnt from './Parnt';
import SponsorOne from './SponsorOne';
import SponsorTwo from './SponsorTwo';
import Qatar from './Qatar';
import FlatOne from './FlatOne';
import imageMain from '../../../assets/Images/ImageMain.jpg'
import Header from '../../header';


// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Scale function to provide responsive sizing
const scale = size => (width / 375) * size; // Assuming 375 is the base width for your design

export default function Main() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const slideAnim = useRef(new Animated.Value(100)).current; 
  const [showButton, setShowButton] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setShowButton(yOffset > scale(100)); 
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const data = [
    {
      key: '1',
      renderItem: () => (
        <ImageBackground source={imageMain} style={styles.main}>
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Animated.View style={[styles.headerText, { opacity: fadeAnim }]}>
              <Text style={styles.title}>
                <Text style={{ color: 'orange' }}>S</Text>
                <Text style={{ color: 'red' }}>I</Text>
                <Text style={{ color: 'green' }}>L</Text>
                <Text style={{ color: 'rgb(0, 119, 255)' }}>A</Text>
                <Text style={{ color: 'white' }}> 2024</Text>
              </Text>
              <Text style={styles.subtitle}>La 27ème Edition du Salon International du Livre d’Alger</Text>
              <Text style={styles.date}>Du 06 au 16 Novembre 2024</Text>
              <Text style={styles.location}>Au Palais des Expositions des Pins Maritimes</Text>
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, { transform: [{ translateY: slideAnim }] }]}>
              <TouchableOpacity style={styles.buNov}>
                <Text style={styles.buttonText}>Nouvelles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buPro}>
                <Text style={styles.buttonText}>Programmes</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
      ),
    },
    { key: '2', renderItem: () => <Circel /> },
    { key: '3', renderItem: () => <PartyPro /> },
    { key: '4', renderItem: () => <FlatOne /> },
    { key: '5', renderItem: () => <Qatar /> },
    { key: '6', renderItem: () => <FlatTwo /> },
    { key: '7', renderItem: () => <Parnt/> },
    { key: '8', renderItem: () => <SponsorOne /> },
    { key: '9', renderItem: () => <SponsorTwo /> },
  ];

  return (
    <View style={styles.container}>
       <Header title="accuil" />
      <FlatList
        ref={scrollViewRef}
        data={data}
        renderItem={({ item }) => item.renderItem()}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      {showButton && (
        <TouchableOpacity style={styles.scrollButton} onPress={scrollToTop}>
          <Text style={styles.buttonText}>Top</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  main: {
    width: '100%',
    height: scale(545), // Use scaling for height
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  textContainer: {
    width: '98%',
    zIndex: 2,
    textAlign: 'center',
    alignItems: 'center',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(16), // Scale for gap
  },
  title: {
    fontSize: scale(40), // Scale for font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: scale(20), // Scale for font size
    textAlign: 'center',
  },
  date: {
    fontSize: scale(30), // Scale for font size
    color: 'white',
    textAlign: 'center',
  },
  location: {
    color: 'white',
    fontSize: scale(16), // Scale for font size
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: scale(30), // Scale for margin
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(40), // Scale for gap
    width: '100%',
  },
  buPro: {
    backgroundColor: 'rgb(0, 136, 255)',
    paddingVertical: scale(10), // Scale for padding
    paddingHorizontal: scale(20), // Scale for padding
    borderRadius: scale(10), // Scale for border radius
    width: '35%',
    alignItems: 'center',
  },
  buNov: {
    borderWidth: scale(3), // Scale for border width
    borderColor: 'rgb(0, 136, 255)',
    backgroundColor: 'transparent',
    paddingVertical: scale(10), // Scale for padding
    paddingHorizontal: scale(20), // Scale for padding
    borderRadius: scale(10), // Scale for border radius
    width: '35%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(12), // Scale for font size
  },
  scrollButton: {
    position: 'absolute',
    bottom: scale(20), // Scale for positioning
    right: scale(20), // Scale for positioning
    backgroundColor: '#3b5998',
    padding: scale(10), // Scale for padding
    borderRadius: scale(30), // Scale for border radius
  },
});
