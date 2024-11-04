import React, { useState } from 'react';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TouchableOpacity,Modal } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors, images,icons } from '../../constants';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const scale = width / 420;
import Menu from './menu';

export default function Presse() {
  const [items, setItems] = useState(Menu);
  const [items2, setItems2] = useState(Menu);
  const [items3, setItems3] = useState(Menu);
  const [dialog,setDialog ] = useState(null);


const [isBoolean, setBoolean] = useState(false);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter(curElem => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Quaternary }}>
      <View style={{ flex: 1, height: 400, backgroundColor: colors.Quaternary }}>
        <Header title="Presse" />
        <ScrollView>
          <View style={{
            width: '100%',
            backgroundColor: colors.tertiary,
            borderRadius: 70 * scale,
            position: 'fixed',
          }}>
            <NativeBaseProvider>
              <View style={{
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

                  {items.map(elem => {
                    const {id,category} = elem;
                    return (
                      <View>


                      {(category == 'photos') ? 
                          <View
                          style={{marginTop: 30}}>
  
  
                        <View style={{ flexDirection: 'row',
      flexWrap: 'wrap',justifyContent:'space-between',wrap:2,marginHorizontal:20}}>
  
  {items.map(elem => {
                      const {id, titre, description, image,category} = elem;
                      return (  
                      
                      <View key={id}>
  
  <Image
                            
                            style={{
                              width: 180,
                              height: 200,
                          borderRadius:10,
  
                            }}
                            source={image}
                          />
    <Text
                            style={{
                              fontWeight: 'bold',
                              color: colors.primary,
                              width: 180,
                              textAlign:'center',
  
                              marginBottom: 10,
                            }}>
                            {titre}
                          </Text>
  
  
                      </View>
                      )})}
                        </View>
                           
  
  
                         
  
                            
                           </View>
                          : 
                          (category == 'videos') ? 
                          <View
                          key={id}
                          style={{marginTop: 30}}>
  
  
                        <View style={{ flexDirection: 'row',
      flexWrap: 'wrap',justifyContent:'space-between',wrap:2,marginHorizontal:20}}>
  
  {items.map(elem => {
                      const {id, titre, description, image,category} = elem;
                      return (  
                      
                      <View key={id}>
  
  <Image
                            
                            style={{
                              width: 180,
                              height: 200,
                          borderRadius:10,
  
                            }}
                            source={image}
                          />
    <Text
                            style={{
                              fontWeight: 'bold',
                              color: colors.primary,
                              width: 180,
                              textAlign:'center',
  
                              marginBottom: 10,
                            }}>
                            {titre}
                          </Text>
  
  
                      </View>
                      )})}
                        </View>
                           
  
  
                         
  
                            
                           </View>
                          :(category == 'podcast') ? 
                          <View
                          key={id}
                          style={{marginTop: 30}}>
  
  
                        <View style={{ flexDirection: 'row',
      flexWrap: 'wrap',justifyContent:'space-between',wrap:2,marginHorizontal:20}}>
  
  {items.map(elem => {
                      const {id, titre, description, image,category} = elem;
                      return (  
                      
                      <View key={id}>
  
  <Image
                            
                            style={{
                              width: 180,
                              height: 200,
                          borderRadius:10,
  
                            }}
                            source={image}
                          />
    <Text
                            style={{
                              fontWeight: 'bold',
                              color: colors.primary,
                              width: 180,
                              textAlign:'center',
  
                              marginBottom: 10,
                            }}>
                            {titre}
                          </Text>
  
  
                      </View>
                      
  
                      )})}
                        </View>
                           
  
  
                         
  
                            
                           </View>
                              :null
                          
                        
                      }</View>
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