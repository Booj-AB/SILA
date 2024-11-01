import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Presse,Exposants, Ouvrage,Home,Programmes} from './src/components/screens';
import {colors, icons} from './src/components/constants';
import {NavigationContainer} from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    elevation: 0,
    height: Platform.OS === 'ios' ? 90 : 60,
    borderRadius: 20,
    backgroundColor: colors.Quaternary,
   
  },
   headerShown: false,
};

const BottomNavigation = () => {
  return (


    <NavigationContainer>

    <Tab.Navigator
    initialRouteName="Main"
    screenOptions={screenOptions}>
      <Tab.Screen
        name="Exposants"
        component={Exposants}
        
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.exposants}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Ouvrage"
        component={Ouvrage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.ouvrage}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: focused ? colors.primary : colors.secondary,

                  height: Platform.OS === 'ios' ? 70 : 60,
                  width: Platform.OS === 'ios' ? 70 : 60,
                  top: Platform.OS === 'ios' ? -30 : -20,
                  borderRadius: Platform.OS === 'ios' ? 35 : 30,
                  borderWidth: 2,
                  borderColor: focused ? colors.secondary : colors.Quaternary,
                }}>
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? colors.secondary : colors.Quaternary,
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Programmes"
        component={Programmes}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.programme}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Presse"
        component={Presse}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.presse}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
        
      />
    </Tab.Navigator>
    </NavigationContainer>

  );
};

export default BottomNavigation;
