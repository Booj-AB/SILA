import React, { useState, useMemo, useEffect } from 'react';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors } from '../../constants';
import { Dimensions } from 'react-native';
import plans from '../../../assets/bottomBarIcon/plan.jpg';
import programme from '../../../assets/bottomBarIcon/programmes.png';
import Menu from './menu';
import axios from 'axios';
import image from '../../../assets/Images/ImageMain.png'

const { width } = Dimensions.get('window');
const scale = width / 420;

export default function Programmes() {
  const [activeTab, setActiveTab] = useState('culturels');

  const items = useMemo(() => Menu, []);

      const [dates, setDates] = useState([]);
      const [cul, setCul] = useState([]);

  useEffect(()=>{
    getDate()
    getPdf()
  },[])

   useEffect(()=>{
     getPdf()
  },[])



  async function getPdf() {
    const res =  await axios.get(`http://10.0.2.2:9400/api/getPdf`)
    setCul(res.data.cul)
    
  }
 

  async function getDate() {
       const res =  await axios.get(`http://10.0.2.2:9400/api/getDate`)
       setDates(res.data.all)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'culturels':
        return (

          cul.length > 0  ?
           cul.map(elem=> {
                    const {des, Title, pdf} = elem;
                       return (
                      <TouchableOpacity
                        key={elem._id}
                        style={{marginTop: 30, alignItems: 'center' , marginBottom:20}}
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
                          source={image}
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
                  })
          :
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => Linking.openURL('https://drive.google.com/file/d/1_jJT4JNAQYlp16Du9ydz6HSeWbIQR8ID/view?usp=sharing')}
            accessibilityLabel="Open Programme Culturel"
            accessible
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={programme}
            />
            <Text style={styles.title}>Programme Culturel</Text>
            <Text style={styles.description}>
              {`Le lorem ipsum également appelé faux-texte...`} {/* Ensure text is wrapped in <Text> */}
            </Text>
          </TouchableOpacity>
        );

      case 'dates':
        return (
          <View style={styles.datesContainer}>
            {dates.map((elem, index) => {

              return (
                <View key={`${elem._id}-${index}`} style={styles.dateItem}>
                  <Text style={styles.dateText}>{elem.date}</Text>
                  <Text style={styles.dateText}>Du {elem.heure}</Text>
                  <Text style={styles.dateDescription}>{elem.des}</Text> {/* Ensure this is wrapped in <Text> */}
                </View>
              );
            })}
          </View>
        );

      case 'plan':
        return (
          <Image
            resizeMode="contain"
            style={styles.planImage}
            source={plans}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Programmes" />
        <ScrollView>
          <View style={styles.tabContainer}>
            <NativeBaseProvider>
              <View style={styles.tabButtonContainer}>
                <TouchableOpacity onPress={() => setActiveTab('culturels')}>
                  <Text style={styles.tabButtonText}>Culturels</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('dates')}>
                  <Text style={styles.tabButtonText}>Dates</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('plan')}>
                  <Text style={styles.tabButtonText}>Plan</Text>
                </TouchableOpacity>
              </View>
              {renderContent()}
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.Quaternary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.Quaternary,
  },
  tabContainer: {
    width: '100%',
    backgroundColor: colors.tertiary,
    borderRadius: 70 * scale,
    position: 'relative',
  },
  tabButtonContainer: {
    backgroundColor: colors.Quaternary,
    height: 50 * scale,
    marginHorizontal: 50 * scale,
    borderRadius: 20 * scale,
    marginTop: 40 * scale,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15 * scale,
  },
  tabButtonText: {
    fontWeight: 'bold',
    color: colors.white,
  },
  touchableContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    tintColor: colors.primary,
  },
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  description: {
    padding: 30,
    paddingTop: 0,
    marginBottom: 500,
    color: colors.primary,
  },
  datesContainer: {
    marginTop: 50,
    marginBottom: 80,
  },
  dateItem: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    height: 300,
  },
  dateText: {
    fontWeight: 'bold',
    color: colors.tertiary,
    textAlign: 'center',
  },
  dateDescription: {
    marginHorizontal: 20,
    marginTop: 30,
    color: colors.tertiary,
  },
  planImage: {
    width: '100%',
    top:0,height:700
  },
});
