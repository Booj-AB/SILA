import React, {useState} from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;
import Menu from './menu';
import Menu2 from './menu2';
import sila from '../../../assets/bottomBarIcon/sila.png';

export default function Exposant() {
  const [items2, setItems2] = useState(Menu2);
  const [items, setItems] = useState(Menu);
  const filterItem = categoryItem => {
    const updatedItems = Menu.filter(curElem => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };
  const [isBoolean, setBoolean] = useState(false);
 
  
  return (
   
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Exposants" />

        <ScrollView>
          <View
            style={{
              width: '100%',
              height: '100%',
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
                  marginTop: 30 * scale,
                  marginBottom: 40 * scale,
                  marginBottom: 0 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                  fontWeight: 'bold',
                }}>
                <TouchableOpacity
                  onPress={() => {setItems2(Menu2);setBoolean(true);}}
                  >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Infos
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>  {filterItem('Guide');setBoolean(false);}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Guide
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {filterItem('Plan');setBoolean(false);}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Plan
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {filterItem('Reglements');setBoolean(false);}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Reglements
                  </Text>
                </TouchableOpacity>
              </View>

              {/* infos */}
              {isBoolean ? (
                <View
                  style={{
                    marginTop: 30,
                  }}>
                  {items2.map(elem => {
                    const {id, titre, description} = elem;
                    return (
                      <View
                        isBoolean={isBoolean}
                        key={id}
                        style={{
                          marginTop: 4,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,

                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                          }}>
                          {titre}
                        </Text>
                        <Text
                          style={{
                            color: colors.fifthly,
                            marginLeft: 20,
                            marginRight: 20,
                          }}>
                          {description}
                        </Text>
                      </View>
                    );
                  })}
                   {items.map(elem => {
                    const {id, titre, description, image} = elem;
                    return (
                      <TouchableOpacity
                        key={id}
                        style={{marginTop: 30, alignItems: 'center'}}
                        onPress={() =>
                          Linking.openURL(
                            'https://drive.google.com/file/d/1xDYSlgLnZr2rd-6xKplMcyeBGl8uniLz/view',
                          )
                        }>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: 300,
                            height: 200,
                          }}
                          source={sila}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                          }}>
                          {titre}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                          }}>
                          {description}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
               
              ) : <View style={{marginBottom: 50}}>
              {items.map(elem => {
                const {id, titre, description, image} = elem;
                return (
                  <TouchableOpacity
                    key={id}
                    style={{marginTop: 30, alignItems: 'center'}}
                    onPress={() =>
                      Linking.openURL(
                        'https://drive.google.com/file/d/1xDYSlgLnZr2rd-6xKplMcyeBGl8uniLz/view',
                      )
                    }>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: 300,
                        height: 200,
                      }}
                      source={sila}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: colors.primary,
                        marginBottom: 10,
                      }}>
                      {titre}
                    </Text>

                    <Text
                      style={{
                        padding: 30,
                        paddingTop: 0,
                        color: colors.primary,
                      }}>
                      {description}
                    </Text>
                  </TouchableOpacity>
                );
              })}

              <View style={{height: 400}}></View>
            </View>}
              {/* card of guide-plan-reglements*/}

              {/* {isBoolean ? (
                <View style={{marginBottom: 50}}>


                  {items.map(elem => {
                    const {id, titre, description, image} = elem;
                    return (
                      <TouchableOpacity
                        key={id}
                        style={{marginTop: 30, alignItems: 'center'}}
                        onPress={() =>
                          Linking.openURL(
                            'https://drive.google.com/file/d/1xDYSlgLnZr2rd-6xKplMcyeBGl8uniLz/view',
                          )
                        }>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: 300,
                            height: 200,
                          }}
                          source={sila}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                          }}>
                          {titre}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                          }}>
                          {description}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (

                <View style={{marginBottom: 50}}>
                  {items.map(elem => {
                    const {id, titre, description, image} = elem;
                    return (
                      <TouchableOpacity
                        key={id}
                        style={{marginTop: 30, alignItems: 'center'}}
                        onPress={() =>
                          Linking.openURL(
                            'https://drive.google.com/file/d/1xDYSlgLnZr2rd-6xKplMcyeBGl8uniLz/view',
                          )
                        }>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: 300,
                            height: 200,
                          }}
                          source={sila}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                          }}>
                          {titre}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                          }}>
                          {description}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}

                  <View style={{height: 400}}></View>
                </View>
              )} */}
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16 * scale,
    paddingHorizontal: 20 * scale,
    backgroundColor: colors.Quaternary,
  },
  iconContainer: {
    height: 45 * scale,
    width: 45 * scale,
    borderRadius: 50 * scale,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  exitContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0 * scale,
  },
  icon: {
    height: 24 * scale,
    width: 24 * scale,
    tintColor: colors.Quaternary,
  },
  exit: {
    height: 24 * scale,
    width: 24 * scale,
    tintColor: colors.tertiary,
    marginLeft: -30,
    marginRight: 20,
  },
  deleteButton: {
    position: 'absolute',
    right: 10 * scale,
    top: 10 * scale,
  },
  deleteIcon: {
    height: 20 * scale,
    width: 20 * scale,
    tintColor: colors.error,
  },
});
