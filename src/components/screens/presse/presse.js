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
  const [sel , setSel]  = useState('tous')

     const [tous, setTous] = useState([]);
     const [ima, setIma] = useState([]);
     const [vd, setVd] = useState([]);
     const [po, setPo] = useState([]);
     
     useEffect(()=>{
        getImagesVd()
     },[])

     async function getImagesVd() {
        const res = await axios.get(`http://10.0.2.2:9400/api/getImageVdPo`);
        setVd(res.data.Vd)
        setIma(res.data.Im)
        setPo(res.data.Po)
        setTous(res.data.all)
        
        console.log("All" ,res.data );
        
        
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
              height:'135%'
              
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
                <TouchableOpacity onPress={() => setSel('tous')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Tout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSel('Po')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Podcast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSel('vd')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSel('Image')}>
                  <Text style={{ fontWeight: 'bold', color: colors.white }}>Photos</Text>
                 </TouchableOpacity>
              </View>




                {sel == 'tous' && 
                 
                  <View>
                {tous.map((elem) => {
                  const { _id, Title, Object , des , type} = elem;

                  return (
                    <View key={_id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          
                          alignItems:'center',
                          marginHorizontal: 20,
                        }}>
                        <View>
                           {type == 'Image' && <Image
                            style={{
                              width: 300,
                              height: 200,
                              borderRadius: 10,
                            }}
                            source={Object}
                          />}

                          {/* {
                            type != 'Image' && <Video
                             source={{ uri: Object }} 
                             controls={true} 
                             resizeMode="contain"
                             repeat
                            />
                          } */}
                          <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:23
                            }}>
                            {Title}
                          </Text>

                           <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:17
                            }}>
                            {des}
                          </Text>

                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
                
                }




                <View>
                {ima.map((elem) => {
                  const { _id, Title, Object , des , type} = elem;

                  return (
                    <View key={_id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          
                          alignItems:'center',
                          marginHorizontal: 20,
                        }}>
                        <View>
                           {type == 'Image' && <Image
                            style={{
                              width: 300,
                              height: 200,
                              borderRadius: 10,
                            }}
                            source={Object}
                          />}

                
                          <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:23
                            }}>
                            {Title}
                          </Text>

                           <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:17
                            }}>
                            {des}
                          </Text>

                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>





              <View>
                {vd.map((elem) => {
                  const { _id, Title, Object , des , type} = elem;

                  return (
                    <View key={_id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          
                          alignItems:'center',
                          marginHorizontal: 20,
                        }}>
                        <View>

                          {/* {
                            type != 'Image' && <Video
                             source={{ uri: Object }} 
                             controls={true} 
                             resizeMode="contain"
                             repeat
                            />
                          } */}
                          <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:23
                            }}>
                            {Title}
                          </Text>

                           <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:17
                            }}>
                            {des}
                          </Text>

                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>







              <View>
                {po.map((elem) => {
                  const { _id, Title, Object , des , type} = elem;

                  return (
                    <View key={_id} style={{ marginTop: 30 }}>
                      <View
                        style={{
                          
                          alignItems:'center',
                          marginHorizontal: 20,
                        }}>
                        <View>
                         

                          {/* {
                            type != 'Image' && <Video
                             source={{ uri: Object }} 
                             controls={true} 
                             resizeMode="contain"
                             repeat
                            />
                          } */}
                          <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:23
                            }}>
                            {Title}
                          </Text>

                           <Text
                            style={{
                              fontWeight: 'bold',
                              marginBottom:10,
                              color: colors.primary,
                              width: 300,
                              textAlign: 'center',
                              marginBottom: 10,
                              fontSize:17
                            }}>
                            {des}
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
