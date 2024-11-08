import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import {colors, icons, images} from '../../constants';

import image from '../../../assets/Images/ImageMain.png';
import { useNavigation } from '@react-navigation/native';

// const data1 = [
//   { id: '1', title: 'One', description: 'Description for item One', image },
//   { id: '2', title: 'Two', description: 'Description for item Two', image },
//   { id: '3', title: 'Three', description: 'Description for item Three', image },
// ];

const FlatTwo = (arrMo) => {

  const navigation = useNavigation()
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef(null);

  // console.log('MO',arrMo.arrMo);
  const data1 =  arrMo.arrMo



  //  onPress={()=>navigation.navigate('Details', { data })}
  

  // const data = {
  //    titel : data1[0].Title ,
  //    image : data1[0].Image, 
  //    des : data1[0].des,
  //    Bol:  false ,
  // }
  

  // useEffect(() => {
  //   let currentIndex = 0;

  //   intervalRef.current = setInterval(() => {
  //     if (flatListRef.current) {
  //       flatListRef.current.scrollToIndex({
  //         index: currentIndex,
  //         animated: true,
  //       });
  //       currentIndex = (currentIndex + 1) % data1.length;
  //     }
  //   }, 2000); 

  //   return () => {
  //     clearInterval(intervalRef.current); 
  //   };
  // }, []);

  function handel(i) {
    console.log(i);
    console.log(data1[i]);
    
    
      const data = {
         titel :data1[i].Title , 
         image: data1[i].Image,
         Bol : false,
         des : data1[i].des
      }
      navigation.navigate('Details', { data })
  }
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mots</Text>
       {data1.length > 0 && 

      <FlatList
        ref={flatListRef}
        data={data1}
        keyExtractor={(item) => item.des}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item , index }) => (
          <View style={styles.cardContainer}>
            <Image source={{uri : item.Image}} style={styles.image} />
            <Text style={styles.cardTitle}>{item.Title}</Text>
            <Text style={styles.description}>{item.des.length > 190 ?`${item.des.slice(0,190)}....`:item.des}</Text>

                <TouchableOpacity style={styles.button}  onPress={()=>handel(index)}>
                        <Text style={styles.buttonText}>Lire Plus</Text>
                    </TouchableOpacity>
          </View>
        )}
      />          


       }
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
    height:535,
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
