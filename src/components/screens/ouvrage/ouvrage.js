import React, {useState, useEffect,useRef } from 'react';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TextInput, FlatList } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors, icons, images } from '../../constants';
// import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 420;

export default function Ouvrage() {
  

  const data = [
    { sbn: 1, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 2, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 2653, titre: 'noe', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 4354, titre: 'nomvre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 4355, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 6, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 546-6457, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 8, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
    { sbn: 9, titre: 'nomLivre', auteur: 'auteurDuLivre', prix: 'prixDuLIvre' },
  ]




  const scrollViewRef = useRef(null);

  const [search, setSearch] = React.useState(null);
  const [list, setList] = React.useState(data);
  const filterList = (item) => {
    const newList = data.filter((val) => val.titre.toLocaleLowerCase().indexOf(item.toLocaleLowerCase())>= 0)
  setList(newList)
  };

  useEffect(()=>{
  if(search !== null){
  filterList(search);
  }
  
  },[search]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Quaternary }}>
      <View style={{ flex: 1, backgroundColor: colors.Quaternary }}>
        <Header title="Ouvrage" />
        <ScrollView>
        <View
          style={{
            width: '100%', // adjust the width to your needs
            backgroundColor: colors.tertiary,
            borderRadius: 70 * scale, // this will create a semi-circle
            position: 'fixed',
            marginBottom:100,
            top: 0,
            left: 0,
          }}>
          <NativeBaseProvider>

            <View style={{ marginTop: 60 }}>
              <View style={styles.search}>
                <View style={styles.icon}>
                  <Image source={icons.recherche} style={{ width: 20, height: 20 }} tintColor='#ffff' />


                </View>
                <TextInput
                  style={styles.input}
                  placeholder='search....'
                  onChangeText={(val) => setSearch(val)} />

              </View>


              
              <View style={styles.listItem}>
             
                
             {list.map(elem => {
               const {id,sbn, titre, auteur, prix} = elem;
               return (


                     <View key={id}style={styles.listItem2}>
                       <View style={{flexDirection:'row'}}>

                       <Text style={{marginRight:10,flexDirection:'column'}}>{titre}</Text>
                       <Text style={{marginRight:10,flexDirection:'column'}}>{auteur}</Text>
                       
                       </View>
                       <View style={{flexDirection:'row'}}>

                           <Text style={{marginRight:30}}>prix du livre: {prix}</Text>
                       <Text>sbn: {sbn}</Text>
                       </View>
            
                     </View>
                   
                 );
               })}

             </View>
             



            </View>

          </NativeBaseProvider>
        </View>
</ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.gris,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',

  },
  icon: {
    backgroundColor: colors.primary,
    padding: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: colors.primary

  },
  listItem2: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 5,

  },
  listText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginLeft:10
  }
})
