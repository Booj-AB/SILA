import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons, images} from './constants';
import {Actionsheet, Box, Icon, NativeBaseProvider} from 'native-base';
import {useDisclose} from 'native-base';

import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;

const header = ({title, onPress}) => {
  const navigation = useNavigation();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [items, setItems] = useState([
    {
      label: 'Relations Exposants',
      description: 'KIDACHE Dalila',
      description2: 'info@sila.dz',
    },
    {
      label: 'Service Commercial',
      description: 'Fodhil Nasser',
      description2: 'commercial@sila.dz',
    },
    {
      label: 'Administration et Logistiques',
      description: 'BOUINOONE larbi',
      description2: 'administration@sila.dz',
    },
    {
      label: 'Service Technique',
      description: 'Brahimi Akram / Tounsi Sarah',
      description2: ' technique@sila.dz',
    },
    {
      label: 'Relations Ministériel et Douanes',
      description: 'DAHMANI Yazid',
      description2: 'yazid.dahmani@sila.dz',
    },

    {
      label: 'Adresse',
      description: 'ENAG Zone Industrielle, Réghaïa, Alger',
      description2: '',
    },
    {
      label: '',
      description: '',
      description2: '               © SILA 2024 / Powered By Techforger.',
    },
    // Add more items here
  ]);

  const handlePress = () => {
    onOpen();
  };

  const handleDeleteItem = index => {
    setItems(prevItems => prevItems.filter((item, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: 50 * scale,
              width: 50 * scale,
            }}
            source={images.ministere}
          />
          <Image
            resizeMode="contain"
            style={{
              height: 50 * scale,
              width: 50 * scale,
            }}
            source={images.sila}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: -50 * scale,
            fontSize: 20 * scale,
            fontWeight: 'bold',
            flex: 1,
            textAlign: 'center',
            color: colors.secondary,
          }}>
          {title}
        </Text>

        <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={icons.contact}
          />
        </TouchableOpacity>
      </View>

      <NativeBaseProvider>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>

              <View style={{width:'100%', display:'flex', justifyContent:'center'}}>
                 <TouchableOpacity  onPress={() => navigation.navigate('ContacUs')}  style={{width:'99%', backgroundColor: colors.Quaternary, padding:10  , marginBottom:10 , borderRadius:5}}>
                    <Text style={styles.buttonText}> envoyer message</Text>
                   </TouchableOpacity>
              </View>

            <ScrollView>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <Box
                    w="95%"
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomWidth: 1 * scale,
                      borderBottomColor: '#ccc',
                      marginBottom: 5 * scale,
                    }}>
                    <Box
                      style={{flex: 1, flexGrow: 1, marginRight: 20 * scale}}>
                      <Text
                        style={{
                          marginLeft: 12 * scale,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                          flex: 1,
                          marginBottom: 3 * scale,
                          color: colors.Quaternary,
                        }}>
                        {item.label}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 12 * scale,
                          fontSize: 14 * scale,

                          flex: 1,
                          marginBottom: 10 * scale,
                          color: colors.fifthly,
                        }}>
                        {item.description}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 12 * scale,
                          fontSize: 14 * scale,

                          flex: 1,
                          marginBottom: 10 * scale,
                          color: colors.fifthly,
                        }}>
                        {item.description2}
                      </Text>
                    </Box>

                    <View style={styles.exitContainer}></View>
                  </Box>
                </React.Fragment>
              ))}

                


            </ScrollView>
          </Actionsheet.Content>
        </Actionsheet>
      </NativeBaseProvider>
    </View>
  );
};

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
   fixedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 136, 255, 0.8)', 
    borderRadius: 10,
    flex: 1, 
    marginHorizontal: 5, 
  },
  // icon: {
  //   width: 24,  // Adjust the width as needed
  //   height: 24, // Adjust the height as needed
  //   marginRight: 10, // Space between icon and text
  // },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default header;
