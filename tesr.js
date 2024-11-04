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

<View style={{flex: 1, height:400, backgroundColor: colors.Quaternary,}}>
        <Header title="Presse" />
        <ScrollView >



        <View
          style={{
            width: '100%',
            backgroundColor: colors.tertiary,
            borderRadius: 70 * scale,
            position: 'fixed',
           
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
 <View>

 {items === 'photos' ? (
  <View>
    <Text>This is an image</Text>
    <Image 
      source={images.sila} 
      style={{ width: 100, height: 100 }} // Add appropriate styles
      resizeMode="cover" // Optional: specify how the image should be resized
    />
  </View>
) : null}

            {(items=='videos') ? (
              <View style={{height:200}}>
                <Text>this is video</Text>
                <Image source={images.sila} />
              </View>
            ) : null}
            {/* {items('podcast') ? (
              <View>
                <Text>this is podcast</Text>
                <Image source={images.sila} />
              </View>
            ) : null}

            {items(Menu) ? (
              <View>
                <Text>this is tout</Text>
                <Image source={images.sila} />
              </View>
            ) : null} */}

</View> 

          
          </NativeBaseProvider>
        </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
