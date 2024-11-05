import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const { width } = Dimensions.get('window');
const scale = width / 420;

export default function Presse() {
  
  const [items, setItems] = useState(Menu);

     const [tous, setTous] = useState([]);
     const [image, setImage] = useState([]);
     const [vd, setVd] = useState([]);
     const [po, setPo] = useState([]);
     
     useEffect(()=>{
        getImagesVd()
     },[])

     async function getImagesVd() {
        const res = await axios.get(`http://10.0.2.2:9400/api/getImageVdPo`);
        // setVd(res.data.Vd)
        // setImage(res.data.Im)
        // setPo(res.data.Po)
        console.log(res);
        
        setTous([...res.data.Po , ...res.data.Vd , ...res.data.Im])
        console.log("PR ",[...res.data.Po , ...res.data.Vd , ...res.data.Im]);
        
     }

  const filterItem = (categoryItem) => {
    const updatedItems = tous.filter((curElem) => curElem.type === categoryItem);
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
                <TouchableOpacity onPress={() => filterItem('vd')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem('Image')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Photos</Text>
                </TouchableOpacity>
              </View>

              <View>
                {tous.map((elem) => {
                  const { _id, titre, image} = elem;

                  return (
                    <View key={_id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          marginHorizontal: 20,
                        }}>
                        <View>
                          <Image
                            style={{
                              width: 320,
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
