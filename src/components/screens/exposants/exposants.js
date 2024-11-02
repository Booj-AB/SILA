import React, { useState } from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;
import { Fab } from 'native-base';
import Menu from "./menu";




export default function Exposant() {
  

  const [items, setItems] = useState(Menu);
  const filterItem =(categoryItem) =>{
    const updatedItems = Menu.filter((curElem) => {
return curElem.category === categoryItem;

    });
setItems(updatedItems);    
  }

  


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Exposants" />
        
  
        <ScrollView>


          <View
            style={{
              width: '100%', // adjust the width to your needs
              // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
              
              position: 'fixed',
              top: 0 * scale,
              left: 0 * scale,
            }}>
            <NativeBaseProvider>
             

{/* //kjyuguyg
            */}
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


                <TouchableOpacity  onPress={() => setItems(Menu)}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Infos
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem("Guide")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Guide
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("Plan")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Plan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("Reglements")}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Reglements
                  </Text>
                </TouchableOpacity>

             
              </View>



              {/* <View style={styles.container}>
                <Pdf
                    source={{ uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf"}}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View> */}

             
              {/* <View
                style={{
                  marginTop: 50* scale,
                  textAlign:'center'
                }}>




<Pdf trustAllCerts={false} source={{uri: "https://drive.google.com/drive/u/1/folders/1P8-0q8XifQyg17GjkYEhsKiale8F2kYS"}} style={{flex:1,width:Dimensions.get('window').width}}/>


                  <Text  style={{
                  marginTop: 50* scale,
                  textAlign:'center'
                }}>hna ndirou des filtres(kaynin)</Text>





                </View> */}



{/* 
{items.map((elem) => {
          const {  } = elem;
          return (
              

);
})} */}

         
            
            </NativeBaseProvider>
          </View>  
        </ScrollView>


       
      </View>
     
    </SafeAreaView>  
      
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});