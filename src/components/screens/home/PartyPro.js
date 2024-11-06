import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProCom from '../../screens/home/ProCom'
import {colors, icons, images} from '../../constants';

const PartyPro = () => {
  // Define the static progress values
  const progressValues = [90, 10, 80, 70, 10, 98];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Le SILA en Bref</Text>
      <View style={styles.innerContainer}>
        {progressValues.map((progress, index) => (
          <View key={index} style={styles.card}>
            <ProCom
              size={95}
              strokeWidth={10}
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
