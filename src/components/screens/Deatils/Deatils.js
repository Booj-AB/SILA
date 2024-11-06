import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; // For responsive font sizes
import { Image } from 'react-native-svg';

// Get the screen width and height
const { width, height } = Dimensions.get('window');

export default function Deatils({ route }) {
  const navigation = useNavigation()
  const data = route.params;
  const all = data.data

  
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {all.Bol ?
       <Image source={all.image } />
      :
        <ImageBackground 
        source={{ uri: all.image }} 
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.circle}>{all.date && <Text style={{color:'white', fontWeight:'bold'}}>{all.date}</Text>}</View>
      </ImageBackground>
      }
      


       <View><Text style={styles.title}>{all.titel}</Text></View>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            {all.des}
          </Text>
        </View>
      </View>
                <TouchableOpacity style={{position:'absolute', bottom:10, left:0}}  onPress={()=>navigation.navigate('Home')}>
                   <Text style={{color:'red'}}>return</Text>
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
    left: width * 0.4, 
    bottom: -height * 0.02, 
    width: 100,
    height: 30,
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
