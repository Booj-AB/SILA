import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProCom from '../../screens/home/ProCom'
import {colors, icons, images} from '../../constants';
import axios from 'axios';

const PartyPro = () => {


  useEffect(()=>{
    getPro()
  },[])

  const [arr, setArr] = useState([])

  async function getPro() {
     const res = await axios.get(`http://102.220.30.73/api/getPro`);
     console.log('UUU' , res.data);
     setArr([
        res.data.pro.surface , 
        res.data.pro.pays ,
        res.data.pro.paysAfrican ,
         res.data.pro.expo,
        res.data.pro.titer ,
        res.data.pro.visit,
     ])
 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Le SILA en Bref</Text>
      <View style={styles.innerContainer}>
        {arr.map((progress, index) => (
          <View key={index} style={styles.card}>
            <ProCom
              size={95}
              strokeWidth={3}
              progress={progress} // Use static progress value here
              color={colors.Quaternary}
            />
            <Text style={styles.label}>{getLabel(index)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Function to get label based on index
const getLabel = (index) => {
  const labels = [
    'Surfaces (m²)',
    'pays',
    'pays Africains',
    'Exposants',
    'mille titres',
    'Million de visiteurs',
  ];
  return labels[index];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: colors.primary,
    marginBottom: 60,
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    marginRight:20
  },
  card: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    textAlign: 'center',
    marginTop: 8,
  },
});

export default PartyPro;
