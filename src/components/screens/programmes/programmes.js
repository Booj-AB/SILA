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
import plans from '../../../assets/bottomBarIcon/plan.jpg';
import programme from '../../../assets/bottomBarIcon/programmes.png';
import Menu from './menu';


export default function Programmes() {
  const [isBoolean, setBoolean] = useState(false);
  const [isBoolean2, setBoolean2] = useState(false);
  const [isBoolean3, setBoolean3] = useState(false);

  const culturels = (() => {
    return (
      setBoolean(true),
      setBoolean2(false),
      setBoolean3(false)
    )
  });
  
  
  const dates = (() => {
    return (
      setBoolean(false),
      setBoolean2(false),
      setBoolean3(true)
    )
  });
  const plan = (() => {
    return (
      setBoolean(false),
      setBoolean2(true),
      setBoolean3(false)
    )
  });

  
 
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
        <Header title="Programmes" />

        <ScrollView>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
              height: '100%', 
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





                <TouchableOpacity onPress={()=> {
                  setItems(Menu); setBoolean(true);
                  setBoolean2(false);
                  setBoolean3(false);}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Culturels
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={dates}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Dates
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={plan}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Plan
                  </Text>
                </TouchableOpacity>
              </View>


              {isBoolean ?  (
                <TouchableOpacity
                  style={{marginTop: 30, alignItems: 'center'}}
                  onPress={() =>
                    Linking.openURL(
                      'https://drive.google.com/file/d/1_jJT4JNAQYlp16Du9ydz6HSeWbIQR8ID/view?usp=sharing',
                    )
                  }>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 300,
                      height: 200,
                      tintColor:colors.primary
                    }}
                    source={programme}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.primary,
                      marginBottom: 10,
                    }}>
                    Programme Culturel
                  </Text>

                  <Text
                    style={{
                      padding: 30,
                      paddingTop: 0,
                      marginBottom:500,
                      color: colors.primary,
                    }}>
                           Le lorem ipsum également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.

                  </Text>
                </TouchableOpacity>


              )
              : null}

              {isBoolean2 ? (
                <View>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      marginTop:-700,
                     
                     
                    }}
                    source={plans}
                  />
                 
                </View>
                
              ) :null}

              {isBoolean3 ?
              //ici on met flex direction row et 2 dates par ligne
              <View  style={{marginTop:50,marginBottom:80}} >
              {items.map(elem => {
                const {id, date, heure, description} = elem;
                return (
 <View
 key={id}
 style={{padding:10,backgroundColor:colors.primary,borderRadius:20,marginHorizontal:20,marginBottom:10,height:300}} >
<Text style={{
  fontWeight:'bold',
  color:colors.tertiary,
  textAlign:'center',
}}>
 {date}
</Text>

<Text style={{
  fontWeight:'bold',
  color:colors.tertiary,
  textAlign:'center',
}}>
  Du {heure}
</Text>



<Text style={{
 marginHorizontal:20,
 marginTop:30,
  color:colors.tertiary,
  
}}>
  {description}
</Text>


              </View>
 );
})}
              </View>
              :  null}

             
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
