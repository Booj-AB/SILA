import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { colors, icons, images } from '../../constants';

const Card = ({ titel, image, des, date }) => {
  // const navigation = useNavigation();
  const data  ={
    titel , image , des , date
  }
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{titel}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{des}</Text>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText}>Lire Plus +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', 
    marginVertical: 5, 
    backgroundColor: 'rgb(1, 150, 150)', 
    borderRadius: 8,
    elevation: 2, 
    padding: 10, 
  },
  image: {
    width: '100%',
    height: 150, 
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
    color: 'white',
  },
  description: {
    color: 'white',
    marginBottom: 10,
  },
  date: {
    marginTop: 5,
    textAlign: 'center',
    color: colors.secondary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5, 
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    paddingVertical: 10, 
  },
  button: {
    backgroundColor: colors.secondary, 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', 
    marginHorizontal:40
  },
  buttonText: {
    color: colors.primary, 
    fontSize: 16, 
  },
});

export default Card;