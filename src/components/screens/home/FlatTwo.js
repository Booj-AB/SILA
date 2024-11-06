import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import {colors, icons, images} from '../../constants';

import image from '../../../assets/Images/ImageMain.png';

const data = [
  { id: '1', title: 'One', description: 'Description for item One', image },
  { id: '2', title: 'Two', description: 'Description for item Two', image },
  { id: '3', title: 'Three', description: 'Description for item Three', image },
];

const FlatTwo = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    intervalRef.current = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: currentIndex,
          animated: true,
        });
        currentIndex = (currentIndex + 1) % data.length;
      }
    }, 2000); 

    return () => {
      clearInterval(intervalRef.current); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mots</Text>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lire Plus</Text>
                    </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:  colors.primary,
    marginBottom: 20,
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.8,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    marginBottom:10

  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:  colors.Quaternary,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
   button: {
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default FlatTwo;
