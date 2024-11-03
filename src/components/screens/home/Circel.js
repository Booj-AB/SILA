import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Circel() {

  const labels = [
    "Trouvez un livre",
    "Dates d'expositions",
    "Exposants",
    "Plan d'expositions",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.boxCir}>
        {labels.map((label, index) => (
          <View key={index} style={styles.circleContainer}>
            <View style={styles.circle}>
              <Icon name="rocket" size={60} color="white" />
            </View>
            <Text style={styles.label}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxCir: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
  },
  circleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: 170,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 85,
    backgroundColor: 'rgb(1, 189, 158)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 14,
    color: 'rgb(1, 189, 158)',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
