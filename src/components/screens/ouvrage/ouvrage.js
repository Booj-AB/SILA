import React, { useState, useEffect, useRef } from 'react';
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TextInput, FlatList, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { colors, icons } from '../../constants';
import { Dimensions } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');
const scale = width / 420;

export default function Ouvrage() {
  const data = [
   {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "ثمن النجاح",
    "auteur": "مصطفى عاطف",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9067.5,
    "sbn": 9789777093590,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "جرعات من الثقة",
    "auteur": "مصطفى عاطف",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9067.5,
    "sbn": 9789777093606,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "كيف تقتنص الفرص",
    "auteur": "مصطفى عاطف",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9067.5,
    "sbn": 9789777093613,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "من أنت.. سلبياتك وإيجابياتك",
    "auteur": "يوسف أبو الحجاج",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": "",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "إدارة الموارد البشرية",
    "auteur": "جوناثان سيميلانسكي",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": "977530782x",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "إدارة الضغوط",
    "auteur": "أدمون جاكيسون",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": 9775307864,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "إدارة فريق العمل وأساليب خدمة العملاء",
    "auteur": "توماس كويك",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": 9775307856,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "كيف تؤسس مشروعًا ناجحًا",
    "auteur": "جى بى مينتزبرج",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": "977530783x",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "مهارات إدارة الوقت",
    "auteur": "دبليو أتش دراث",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": "978977709005x",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "قوة المفاوضات التجارية الناجحة",
    "auteur": "ديفيس هوفر",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9045,
    "sbn": 97875307805,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "مهارات الإتصال الفعال ",
    "auteur": "بيجاد سلامة",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9063,
    "sbn": 9789777093187,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "إدارة الجودة الشاملة لـ\"ديمنغ وروبيرت\"",
    "auteur": "ترجمة: هند رشدي",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9040.5,
    "sbn": 9775307112,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "الأسرار الخفية لبرمجة العقل",
    "auteur": "والتريد واورال روبرت",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9040.5,
    "sbn": "977530750X",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "أسرار فن البيع",
    "auteur": "ستيفن شيفمان",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9040.5,
    "sbn": "",
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "أسس بناء الثروة",
    "auteur": "أس بي وأرماند",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9040.5,
    "sbn": 9775307172,
    "genre": 2021
  },
  {
    "editeur": "كنوز للنشر والتوزيع",
    "titre": "الإدارة والقيادة والتميز",
    "auteur": "فان هورن وبراسكي",
    "quantite": 10,
    "anneeEdition": "إدارة وتنمية بشرية",
    "prix": 9040.5,
    "sbn": "",
    "genre": 2021
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "افقه نساء الامه",
    "auteur": "ال مجاهد،محمد بن علي",
    "quantite": 15,
    "anneeEdition": 2017,
    "prix": 600,
    "sbn": 9786035035989,
    "genre": "الصحابه رضي الله عنهم"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاجماع عند ائمه اهل السنه الاربعه",
    "auteur": "ابن هبيره، يحيى بن محمد",
    "quantite": 20,
    "anneeEdition": 2003,
    "prix": 800,
    "sbn": 9789960401790,
    "genre": "الفقه الاسلامي واصوله"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاجهاض احكامه وحدوده في الشريعه الاسلاميه",
    "auteur": "النجيمي، محمد بن يحيى",
    "quantite": 10,
    "anneeEdition": 2011,
    "prix": 1120,
    "sbn": 9789960548463,
    "genre": "دراسات فقهيه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاحاديث الصحاح الغرائب",
    "auteur": "المزي, عبدالرحمن بن يوسف",
    "quantite": 10,
    "anneeEdition": 2001,
    "prix": 400,
    "sbn": "غير متوفر",
    "genre": "الحديث وعلومه والسيره"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاختيار بين الاسلام والنصرانيه - ج 1",
    "auteur": "ديدات, احمد",
    "quantite": 12,
    "anneeEdition": 2015,
    "prix": 800,
    "sbn": 9786035037990,
    "genre": "الحديث وعلومه والسيره"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاختيار بين الاسلام والنصرانيه ج 2",
    "auteur": "ديدات، احمد",
    "quantite": 10,
    "anneeEdition": 2014,
    "prix": 800,
    "sbn": 9786035035842,
    "genre": "علم الاديان المقارن"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاسلام عام 2000",
    "auteur": "هوفمان, مراد",
    "quantite": 20,
    "anneeEdition": 2010,
    "prix": 400,
    "sbn": 9789960549088,
    "genre": "الثقافه الاسلاميه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاسلام في الالفيه الثالثه ديانه في صعود",
    "auteur": "هوفمان, مراد",
    "quantite": 10,
    "anneeEdition": 2011,
    "prix": 1000,
    "sbn": 9789960549026,
    "genre": "الثقافه الاسلاميه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاسلام كبديل",
    "auteur": "هوفمان ,مراد",
    "quantite": 10,
    "anneeEdition": 2002,
    "prix": 720,
    "sbn": 9960203797,
    "genre": "الثقافه الاسلاميه ـ العلمانيه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاسلام كما يراه الماني مسلم",
    "auteur": "هوفمان, مراد",
    "quantite": 20,
    "anneeEdition": 2008,
    "prix": 600,
    "sbn": "6281125012664",
    "genre": "الثقافه الاسلاميه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاعجاز العلمي في السنه النبويه 1/2",
    "auteur": "رضا, صالح احمد",
    "quantite": 10,
    "anneeEdition": 2001,
    "prix": 3400,
    "sbn": 9789960208311,
    "genre": "الحديث وعلومه والسيره"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاعجاز القراني واثره علي مقاصد التنزيل الحكيم",
    "auteur": "عوده، رجاء بنت محمد",
    "quantite": 20,
    "anneeEdition": 2003,
    "prix": 320,
    "sbn": 6281125010523,
    "genre": "القران الكريم"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الاقتضاب في غريب الموطا واعرابه على الابواب 1/2",
    "auteur": "التلمساني, ابوعبدالله محمد بن احمدالمالكي",
    "quantite": 10,
    "anneeEdition": 2001,
    "prix": 2200,
    "sbn": 9789960208397,
    "genre": "الحديث وعلومه والسيره"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الامام سفيان الثوري واراؤه الفقهيه مقارنه بالمذاهب",
    "auteur": "فلاحه، سوسن فريد",
    "quantite": 15,
    "anneeEdition": 2007,
    "prix": 2200,
    "sbn": 9789960541136,
    "genre": "الفقه الاسلامي واصوله"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الامه الاسلاميه وقضاياها المعاصره",
    "auteur": "عبدالواسع, عبدالوهاب بن احمد",
    "quantite": 10,
    "anneeEdition": 2001,
    "prix": 1400,
    "sbn": 99604014,
    "genre": "الثقافه الاسلاميه"
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الامير العصري",
    "auteur": "لورد، كارنز",
    "quantite": 10,
    "anneeEdition": 2008,
    "prix": 2000,
    "sbn": "9789960543574",
    "genre": "العلوم السياسيه "
  },
  {
    "editeur": "العبيكان للنشر ",
    "titre": "الانتصارات الاسلاميه في كشف شبه النصرانيه ",
    "auteur": "الطوفي، نجم الدين سليمان بن عبدالقوي",
    "quantite": 10,
    "anneeEdition": 1995,
    "prix": 2000,
    "sbn": 9789960205266,
    "genre": "العقيده"
  },
    // You can add more items here
  ];

  const scrollViewRef = useRef(null);
  const [search, setSearch] = useState('');
  const [list, setList] = useState(data);

  const filterList = (item) => {
    const newList = data.filter((val) =>
      val.titre.toLowerCase().includes(item.toLowerCase())
    );
    setList(newList);
  };

  useEffect(() => {
    if (search !== '') {
      filterList(search);
    } else {
      setList(data); // Reset to original data if search is empty
    }
  }, [search]);




  async function getBook(params) {
    //  try {
    //   const res= await axios.post(`${API_URL}/addMessage` , {data})
    // } catch (error) {
    //   console.error('Network error:', error);
    // }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Quaternary }}>
      <View style={{ flex: 1, backgroundColor: colors.Quaternary }}>
        <Header title="Ouvrage" />
        <ScrollView>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
              position: 'relative', // Changed to 'relative' for better layout
              marginBottom: 100,
              top: 0,
              padding:10 ,
              left: 0,
            }}
          >
            <NativeBaseProvider>
              <View style={{ marginTop: 60 }}>
                <View style={styles.search}>
                  <View style={styles.icon}>
                    <Image source={icons.recherche} style={{ width: 20, height: 20 }} tintColor='#ffff' />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder='Search....'
                    onChangeText={(val) => setSearch(val)}
                    value={search} // Bind value to search state
                  />
                </View>

                <View style={styles.listItem}>
                  {list.map((elem) => {
                    const { sbn, titre, auteur, prix } = elem; // Removed id since it wasn't used
                    return (
                      <View key={sbn} style={styles.listItem2}> {/* Changed key to sbn for uniqueness */}
                        <View >
                          <Text style={{ marginRight: 10 ,  textAlign:'center'  }}>{titre}</Text>
                          <Text style={{ marginRight: 10, textAlign:'center'  }}>{auteur}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ marginRight: 30 }}>Prix du livre: {prix} DA</Text>
                          <Text>ISBN: {sbn}</Text>
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
    color: colors.primary,
  },
  listItem2: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#e2e8f0',
    padding: 16,
    borderRadius: 5,
    width:'96%'
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
});
