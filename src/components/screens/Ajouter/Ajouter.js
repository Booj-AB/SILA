import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

// Responsive utility functions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const wp = (percentage) => Math.round((percentage * SCREEN_WIDTH) / 100);
export const hp = (percentage) => Math.round((percentage * SCREEN_HEIGHT) / 100);

const sections = [
  { key: 'One', name: 'Ajouter Dernieres Nouvelles' },
  { key: 'Two', name: 'Ajouter Mots' },
  { key: 'Three', name: 'Ajouter Nos Partenaires' },
  { key: 'Four', name: 'Ajouter Image Or Video dans page Presse' },
];

export default function Acc() {
  const [add, setAdd] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
  });

  const [animations, setAnimations] = useState(
    sections.reduce((acc, section) => {
      acc[section.key] = new Animated.Value(0);
      return acc;
    }, {})
  );

  const toggleSection = (key) => {
    const isOpen = add[key];
    setAdd({ ...add, [key]: !isOpen });

    Animated.timing(animations[key], {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Page Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Page</Text>
      </View>

      {/* Main Container */}
      <View style={styles.mainContainer}>
        {sections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.key)}
            >
              <Text style={styles.sectionTitle}>{section.name}</Text>
              <Text style={styles.toggleIcon}>{add[section.key] ? '-' : '+'}</Text>
            </TouchableOpacity>

            <Animated.View
              style={[
                styles.sectionContent,
                {
                  height: animations[section.key].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, hp(20)], // Adjust height for responsive expansion
                  }),
                  opacity: animations[section.key],
                },
              ]}
            >
              <TextInput placeholder="Title" style={styles.input} />
              <TextInput placeholder="Description" style={styles.input} />
              {section.key !== 'Three' && (
                <TextInput placeholder="Date" style={styles.input} />
              )}
              <TextInput placeholder="Upload File" style={styles.input} />
            </Animated.View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: '#F2F2F2',
  },
  header: {
    width: '100%',
    marginTop: hp(5),
    alignItems: 'center',
  },
  headerText: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#333',
  },
  mainContainer: {
    width: '100%',
    marginTop: hp(3),
    alignItems: 'center',
  },
  sectionContainer: {
    width: wp(90),
    marginBottom: hp(2),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    height: hp(7),
    backgroundColor: '#0396A6',
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  sectionTitle: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  toggleIcon: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  sectionContent: {
    paddingHorizontal: wp(4),
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    padding: hp(1.5),
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: hp(1),
  },
});
