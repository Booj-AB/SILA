import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; // For responsive font sizes

// Get the screen width and height
const { width, height } = Dimensions.get('window');

export default function Deatils({ route }) {
  const data = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        source={{ uri: data.Image }} 
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.circle}>{data.Date && data.Date}</View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>{data.Title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            {data.des}
          </Text>
        </View>
      </View>
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
    left: width * 0.4, 
    bottom: -height * 0.05, 
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: RFValue(24), 
    fontWeight: 'bold',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: RFValue(16), 
    color: '#333',
    textAlign: 'left',
  },
});
