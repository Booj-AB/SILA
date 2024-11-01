import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../header';
import {colors, icons, images} from '../../constants';
import {NativeBaseProvider} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';


const {width} = Dimensions.get('window');
const scale = width / 420; 

export default function Home() {
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Acceuil" />
        <ScrollView>
          <View
            style={{
              width: '100%', 
              height: 1500 * scale, 
              backgroundColor: colors.tertiary,
              borderRadius: 150 * scale, 
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
            

            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
