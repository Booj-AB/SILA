<<<<<<< HEAD
import {View, Text, Image, Platform} from 'react-native';
import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
=======
import * as React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

>>>>>>> 2e8d7b868ee9d059ca1b057d5f31680c7a9246e8
import {
  Presse,
  Exposants,
  Ouvrage,
  Home,
  Programmes,
} from './src/components/screens';
<<<<<<< HEAD
import {colors, icons} from './src/components/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen'
const TopTab = createMaterialTopTabNavigator();
=======
import { colors, icons } from './src/components/constants';
import Deatils from './src/components/screens/home/Deatils';
import ContacUs from './src/components/screens/ContactUs/ContacUs';
import Ajouter from './src/components/screens/Ajouter/Ajouter';
>>>>>>> 2e8d7b868ee9d059ca1b057d5f31680c7a9246e8

const Stack = createNativeStackNavigator();
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

<<<<<<< HEAD
const BottomNavigation = () => {

// useEffect(()=> {
//   if(Platform.OS === 'android')
//     {SplashScreen.hide();}
// },[] )


=======
// Bottom Tab Navigator with tab icons and stack screens
const BottomTabs = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Tab.Screen
      name="Exposants"
      component={Exposants}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.exposants}
            style={{
              height: 24,
              width: 24,
              tintColor: focused ? colors.primary : colors.secondary,
            }}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Ouvrage"
      component={Ouvrage}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.ouvrage}
            style={{
              height: 24,
              width: 24,
              tintColor: focused ? colors.primary : colors.secondary,
            }}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
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
            }}
          >
            <Image
              source={icons.home}
              style={{
                height: 24,
                width: 24,
                tintColor: focused ? colors.secondary : colors.Quaternary,
              }}
            />
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Programmes"
      component={Programmes}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.programme}
            style={{
              height: 24,
              width: 24,
              tintColor: focused ? colors.primary : colors.secondary,
            }}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Presse"
      component={Presse}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.presse}
            style={{
              height: 24,
              width: 24,
              tintColor: focused ? colors.primary : colors.secondary,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// Main App component with stack navigator
export default function App() {
>>>>>>> 2e8d7b868ee9d059ca1b057d5f31680c7a9246e8
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ContacUs" component={ContacUs} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Deatils} options={{ headerShown: false }} />
        <Stack.Screen name="Ajouter" component={Ajouter} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
