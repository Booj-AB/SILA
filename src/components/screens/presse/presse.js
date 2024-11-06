import React, { useState } from 'react';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors } from '../../constants';
import { Dimensions } from 'react-native';
import Menu from './menu';

const { width } = Dimensions.get('window');
const scale = width / 420;

export default function Presse() {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Quaternary }}>
      <View style={{ flex: 1, backgroundColor: colors.Quaternary }}>
        <Header title="Presse" />
        <ScrollView>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
            }}>
            <NativeBaseProvider>
              <View
                style={{
                  backgroundColor: colors.Quaternary,
                  height: 50 * scale,
                  marginHorizontal: 50 * scale,
                  borderRadius: 20 * scale,
                  marginTop: 40 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                }}>
                <TouchableOpacity onPress={() => setItems(Menu)}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Tout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('podcast')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Podcast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('videos')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('photos')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Photos</Text>
                </TouchableOpacity>
              </View>

              <View>
                {items.map((elem) => {
                  const { id, titre, image, category } = elem;

                  return (
                    <View key={id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          
                          alignItems:'center',
                          marginHorizontal: 20,
                        }}>
                        <View>
                          <Image
                            style={{
                              width: 300,
                              height: 200,
                              borderRadius: 10,
                            }}
                            source={image}
                          />
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                            }}>
                            {titre}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
