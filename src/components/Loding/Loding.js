import { color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const Loding = () => {
  const loadingBarWidth = useRef(new Animated.Value(0)).current;
  const dotOpacity = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]).current;

  // Animate loading bar
  useEffect(() => {
    Animated.loop(
      Animated.timing(loadingBarWidth, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();
  }, [loadingBarWidth]);

  // Animate dots
  useEffect(() => {
    dotOpacity.forEach((dot, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 300),
          Animated.timing(dot, {
            toValue: 1,
            duration: 750,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 750,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, [dotOpacity]);

  return (
    <View style={styles.loader}>
      <View style={styles.loadingTextContainer}>
        <Text style={styles.loadingText}>Loading</Text>
        {dotOpacity.map((opacity, index) => (
          <Animated.Text key={index} style={[styles.dot, { opacity }]}>
            .
          </Animated.Text>
        ))}
      </View>
      <View style={styles.loadingBarBackground}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: loadingBarWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        >
          <View style={styles.whiteBarsContainer}>
            {[...Array(10)].map((_, index) => (
              <View key={index} style={styles.whiteBar} />
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
     // Background color
  },
  loadingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  dot: {
    fontSize: 18,
    color: 'white',
    marginLeft: 3,
  },
  loadingBarBackground: {
    marginTop: 10,
    height: 30,
    width: 200,
    backgroundColor: '#212121',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
  },
  loadingBar: {
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  whiteBarsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    gap: 18,
  },
  whiteBar: {
    backgroundColor: 'white',
    width: 10,
    height: 45,
    opacity: 0.3,
    transform: [{ rotate: '45deg' }],
  },
});

export default Loding;
