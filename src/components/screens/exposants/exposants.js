import React, {useEffect, useState} from 'react';
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
import image from '../../../assets/Images/LogoPdf.jpg'
const scale = width / 420;
import Menu from './menu';
import Menu2 from './menu2';
import sila from '../../../assets/bottomBarIcon/sila.png';
import programme from '../../../assets/bottomBarIcon/reglements.png'
import axios from 'axios';


export default function Exposants() {
  const [items2, setItems2] = useState(Menu2);
  const [items, setItems] = useState(Menu);
  const filterItem = categoryItem => {
    const updatedItems = Menu.filter(curElem => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };
  const [isBoolean, setBoolean] = useState('Info');


      const [gui, setGui] = useState([]);
      const [plan, setPlan] = useState([]);
      const [regl, setRegl] = useState([]);
     






  useEffect(()=>{
     getPdf()
  },[])

   

  async function getPdf() {
    const res =  await axios.get(`http://102.220.30.73/api/getPdf`)
    console.log('res' , res.data.plan);
    setRegl(res.data.regl)
    setPlan(res.data.plan)

    setGui(res.data.gui)
    // setCul(res.data.cul)
    
  }
 
  
  return (
   
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary , padding:10}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Exposants" />

        <ScrollView>
          <View
            style={{
              width: '100%',
              height: '130%',
              padding:10,
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
                  onPress={() => {setItems2(Menu2);setBoolean('Info');}}
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
                  onPress={() =>  {filterItem('Guide');setBoolean('guide');}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Guide
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {filterItem('Plan');setBoolean('plan');}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Plan
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {filterItem('Reglements');setBoolean("reg");}}>
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

              {isBoolean == "Info" && 



                  items2.map(elem => {
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
                  <View style={{ marginBottom:100}} ></View>

                  {isBoolean == "guide" && 
                  gui.map(elem=> {
                    const {des, Title, pdf, Image:ii} = elem;
                       return (
                      <TouchableOpacity
                        key={elem._id}
                        style={{marginTop: 30, alignItems: 'center' ,    marginTop: 30 ,
                      borderBottomWidth: 1,
                      borderBottomColor: 'black',
                      borderBottomStyle: 'solid' }}
                        onPress={() =>
                          Linking.openURL(pdf,
                          )
                        }>
                        <Image
                         source={{uri : ii}}
                          resizeMode="contain"
                          style={{
                            width: '100%',
                            height: 200,
                        borderRadius:10,

                          }}
                         
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                          }}>
                          {Title}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                          }}>
                          {des}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}






                  {isBoolean == "plan" && 



                  plan.map(elem=> {
                    const {des, Title, pdf , Image:ii} = elem;
                       return (
                      <TouchableOpacity
                        key={elem._id}
                        style={{marginTop: 30, alignItems: 'center' , 
                          marginTop: 30 ,
                      borderBottomWidth: 1,
                      borderBottomColor: 'black',
                      borderBottomStyle: 'solid'

                        }}
                        onPress={() =>Linking.openURL(pdf).catch((err) => console.error("Failed to open URL: ", err))
                        }>
                        <Image
                        source={{uri : ii}}
                          resizeMode="contain"
                          style={{
                            width: '100%',
                            height: 200,
                        borderRadius:10,

                          }}
                            
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                            margin:10
                          }}>
                          {Title}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                            marginTop:20
                          }}>
                          {des} 
                        </Text>
                      </TouchableOpacity>
                    );
                  })}




                   {isBoolean == "reg" && 



                  regl.map(elem=> {
                    const {des, Title, pdf , Image:ii} = elem;
                       return (
                      <TouchableOpacity
                        key={elem._id}
                        style={{marginTop: 30, alignItems: 'center' ,   marginTop: 30 ,
                      borderBottomWidth: 1,
                      borderBottomColor: 'black',
                      borderBottomStyle: 'solid'}}
                        onPress={() =>
                          Linking.openURL(pdf,
                          )
                        }>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: '100%',
                            height: 200,
                        borderRadius:10,

                          }}
                          source={{uri : ii}}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 10,
                          }}>
                          {Title}
                        </Text>

                        <Text
                          style={{
                            padding: 30,
                            paddingTop: 0,
                            color: colors.primary,
                          }}>
                          {des}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}



                  



                 
              
              
              
             
             
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





 
                // <View
                //   style={{
                //     marginTop: 30,
                //   }}>
                  






//                    {items.map(elem => {
//                     const {id, titre, description, Image,link} = elem;
//                     return (
//                       <TouchableOpacity
//                         key={id}
//                         style={{marginTop: 30, alignItems: 'center'}}
//                         onPress={() =>
//                           Linking.openURL(link,
//                           )
//                         }>
//                         <Image
//                           resizeMode="contain"
//                           style={{
//                             width: '100%',
//                             height: 200,
//                         borderRadius:10,

//                           }}
//                           source={Image}
//                         />
//                         <Text
//                           style={{
//                             fontWeight: 'bold',
//                             color: colors.primary,
//                             marginBottom: 10,
//                           }}>
//                           {titre}
//                         </Text>

//                         <Text
//                           style={{
//                             padding: 30,
//                             paddingTop: 0,
//                             color: colors.primary,
//                           }}>
//                           {description}
//                         </Text>
//                       </TouchableOpacity>
//                     );
//                   })}


//                 </View>


               
//               ) : <View style={{marginBottom: 50}}>
//               {plan.map(elem => {
//                 const {id, titre, des, image,pdf} = elem;
//                 return (
//                   <TouchableOpacity
//                     key={id}
//                     style={{marginTop: 30, alignItems: 'center'}}
//                     onPress={() =>
//                       Linking.openURL(pdf,)
//                     }>
                    // <Image
                    //   resizeMode="contain"
                    //   style={{
                    //     width: '100%',
                    //     height: 200,
                    //     borderRadius:10,
                    //   }}
                    //   source={image}
                    // />
//                     <Text
//                       style={{
//                         fontWeight: 'bold',
//                         color: colors.primary,
//                         marginTop:10,
//                         marginBottom: 10,
//                       }}>
//                         d
//                       {/* {titre}fe */}
//                     </Text>

//                     <Text
//                       style={{
//                         padding: 30,
//                         paddingTop: 0,
//                         color: colors.primary,
//                       }}>
//                       {/* {des} */}
//                     </Text>
//                   </TouchableOpacity>
//                 );
//               })}

//               <View style={{height: 400}}></View>
//             </View>}