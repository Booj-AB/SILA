import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contact from './components/screens/ContactUs/ContacUs';
import Deatils from './components/screens/Deatils/Deatils';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          
        <Stack.Screen name="contacUs" component={Contact} />
        <Stack.Screen name="deatils" component={Deatils} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
