import React, {useState} from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;
import {Fab} from 'native-base';
import Menu from './menu';


const colorss = ['tomato', 'thistle', 'skyblue', 'teal'];
export default function Presse() {





  const [isBoolean, setBoolean] = useState(false);

  const [items, setItems] = useState(Menu);
  const filterItem = categoryItem => {
    const updatedItems = Menu.filter(curElem => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Presse" />

       
          <View
            style={{
              width: '100%',
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,

              position: 'fixed',
              top: 0 * scale,
              left: 0 * scale,
            }}>
            <NativeBaseProvider>


              <View
                style={{
                  backgroundColor: colors.Quaternary,
                  height: 50 * scale,
                  marginHorizontal: 50 * scale,
                  borderRadius: 20 * scale,
                  marginTop: 40 * scale,
                  marginBottom: 0 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                  fontWeight: 'bold',
                }}>
                <TouchableOpacity onPress={() => setItems(Menu)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tout
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem('podcast')}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Podcast
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('videos')}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Videos
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('photos')}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Photos
                  </Text>
                </TouchableOpacity>
              </View>

           
              




            
            
            
            </NativeBaseProvider>
          </View>
        
      </View>
    </SafeAreaView>
  );
}
