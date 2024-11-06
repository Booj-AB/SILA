<<<<<<< HEAD
import axios from 'axios';
import { Button } from 'native-base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs'; // Import the react-native-fs library
import ImageResizer from 'react-native-image-resizer'; // Import the image resizer
import { useNavigation } from '@react-navigation/native';


export default function Ajouter() {
  const [fileName, setFileName] = useState(''); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showMots, setShowMots] = useState(false);
  const [showImageVd, setShowImageVd] = useState(false);
  const [showPodcast, setShowPodcast] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showSponsor, setShowSponsor] = useState(false);
  const [object, setObject] = useState('');
  const [type, setType] = useState('');

  const navigation = useNavigation();

  // Function to pick a document (image, PDF, or video)
 const pickDocument = async () => {
  try {
    // Pick a document (image, PDF, or video)
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.video],
    });

    const filePath = res[0].uri;

    // Check if the file is an image
    if (res[0].type.startsWith('image/')) {
      // Resize image
      const resizedImage = await ImageResizer.createResizedImage(filePath, 800, 600, 'JPEG', 80);
      const base64Data = await RNFS.readFile(resizedImage.uri, 'base64'); // Read resized image as base64
      setFileName(`data:${res[0].type};base64,${base64Data}`); // Set Base64 data with MIME type
    } 
    // Check if the file is a PDF
    else if (res[0].type === 'application/pdf') {
      const base64Data = await RNFS.readFile(filePath, 'base64'); // Read PDF file as base64
      setFileName(`data:${res[0].type};base64,${base64Data}`); // Set Base64 data with MIME type
    } 
    // Otherwise, assume it's a video
    else if (res[0].type.startsWith('video/')) {
      const base64Data = await RNFS.readFile(filePath, 'base64'); // Read video file as base64
      setFileName(`data:${res[0].type};base64,${base64Data}`); // Set Base64 data with MIME type
    }
  } catch (err) {
    if (!DocumentPicker.isCancel(err)) {
      Alert.alert('Error', 'Unable to pick the document');
    }
  }
};

  // Function to send data to the server
  const sendRequest = async (endpoint, data, resetFields) => {
    console.log(data);
    console.log(resetFields);
    console.log(endpoint);
    
    try {
      const res = await axios.post(`http://10.0.2.2:9400/api/${endpoint}`, data);
      console.log(res);
      if (res.data.code === '01') {
        resetFields();
        Alert.alert("Data Sent", "Done", [{ text: "OK" }]);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  // Function to send new data
  const SEND_NEW = () => {
    const resetFields = () => {
      setTitle('');
      setDescription('');
      setDate('');
      setFileName('');
    };
    sendRequest('AddNew', { Title: title, des: description, date, Image: fileName }, resetFields);
  };

  // Function to send mots
  const SEND_MOTS = () => {
    const resetFields = () => {
      setTitle('');
      setDescription('');
      setFileName('');
    };
    sendRequest('AddMots', { Title: title, des: description, Image: fileName }, resetFields);
  };

  // Function to send image or video
  const SEND_IMAGE_VD = () => {
    const resetFields = () => {
      setObject('');
      setType('');
    };
    sendRequest('AddImageVdPo', { Object : fileName, type: type }, resetFields);
  };

  const [url , setUrl] = useState('')

  // Function to send podcast
  const SEND_PODCAST = () => {
    const resetFields = () => {
      setObject('');
    };
    sendRequest('AddImageVdPo', { Object: url, type: 'podcast' }, resetFields);
  };

  // Function to send PDF
  const SEND_PDF = () => {
    const resetFields = () => {
      setFileName('');
      setType('');
    };
    sendRequest('AddPdf', { Pdf: fileName, type }, resetFields);
  };

  // Function to send date
  const SEND_DATE = () => {
    const resetFields = () => {
      setDescription('');
      setDate('');
    };
    sendRequest('AddDate', { Date:date, des: description }, resetFields);
  };

  // Function to send sponsor data
  const SEND_SPONSOR = () => {
    const resetFields = () => {
      setFileName('');
      setType('');
    };
    sendRequest('AddParAndSponsor', { Image: fileName, type }, resetFields);
=======
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

// Responsive utility functions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const wp = (percentage) => Math.round((percentage * SCREEN_WIDTH) / 100);
export const hp = (percentage) => Math.round((percentage * SCREEN_HEIGHT) / 100);

const sections = [
  { key: 'One', name: 'Ajouter Dernieres Nouvelles' },
  { key: 'Two', name: 'Ajouter Mots' },
  { key: 'Three', name: 'Ajouter Nos Partenaires' },
  { key: 'Four', name: 'Ajouter Image Or Video dans page Presse' },
];

export default function Acc() {
  const [add, setAdd] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
  });

  const [animations, setAnimations] = useState(
    sections.reduce((acc, section) => {
      acc[section.key] = new Animated.Value(0);
      return acc;
    }, {})
  );

  const toggleSection = (key) => {
    const isOpen = add[key];
    setAdd({ ...add, [key]: !isOpen });

    Animated.timing(animations[key], {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      {/* Page Header */}
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
      <View style={styles.header}>
        <Text style={styles.headerText}>Page</Text>
      </View>

<<<<<<< HEAD
      <View style={styles.mainContainer}>
        <View style={styles.box}>
          {/* New Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {
              setShowNew(!showNew), 
              setFileName(''),
              setDate(''),
              setObject(''),
              setType(""),
              setTitle(''),
              setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter New</Text>
              <Text style={styles.buttonText}>{showNew ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showNew && (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Title'
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Description'
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Date'
                  value={date}
                  onChangeText={setDate}
                  style={styles.input}
                />
                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showNew && fileName != '' ?'Image Dowlonde':'Select Image'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={SEND_NEW} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Mots Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowMots(!showMots),
              setFileName(''),
              setDate(''),
              setObject(''),
              setType(""),
              setTitle(''),
              setDescription('')}} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter Mots</Text>
              <Text style={styles.buttonText}>{showMots ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showMots && (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Title'
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Description'
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showMots && fileName != '' ?'Image Dowlonde':'Select Image'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={SEND_MOTS} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Image Video Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowImageVd(!showImageVd),
                  setFileName(''),
                  setDate(''),
                  setObject(''),
                  setType(""),
                  setTitle(''),
                  setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter ImageVd</Text>
              <Text style={styles.buttonText}>{showImageVd ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showImageVd && (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Type'
                  value={type}
                  onChangeText={setType}
                  style={styles.input}
                />
                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showImageVd && fileName != '' ?'Image Dowlonde':'Select Image'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={SEND_IMAGE_VD} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Podcast Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowPodcast(!showPodcast),
                  setFileName(''),
                  setDate(''),
                  setObject(''),
                  setType(""),
                  setTitle(''),
                  setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter Podcast</Text>
              <Text style={styles.buttonText}>{showPodcast ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showPodcast && (
              <View style={styles.inputContainer}>
                
                <TextInput
                  placeholder='Url'
                  value={url}
                  onChangeText={setUrl}
                  style={styles.input}
                />

                <TouchableOpacity onPress={SEND_PODCAST} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* PDF Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowPdf(!showPdf),
                  setFileName(''),
                  setDate(''),
                  setObject(''),
                  setType(""),
                  setTitle(''),
                  setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter PDF</Text>
              <Text style={styles.buttonText}>{showPdf ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showPdf && (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Type'
                  value={type}
                  onChangeText={setType}
                  style={styles.input}
                />
                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showPdf && fileName!=''?'pdf dowlonde':'select Pdf'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={SEND_PDF} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Date Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowDate(!showDate),
                  setFileName(''),
                  setDate(''),
                  setObject(''),
                  setType(""),
                  setTitle(''),
                  setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter Date</Text>
              <Text style={styles.buttonText}>{showDate ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showDate && (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Description'
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Date'
                  value={date}
                  onChangeText={setDate}
                  style={styles.input}
                />
                <TouchableOpacity onPress={SEND_DATE} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Sponsor Section */}
          <View style={styles.section}>
            <TouchableOpacity onPress={() => {setShowSponsor(!showSponsor),
                  setFileName(''),
                  setDate(''),
                  setObject(''),
                  setType(""),
                  setTitle(''),
                  setDescription('')
            }} style={styles.toggleButton}>
              <Text style={styles.buttonText}>Ajouter Sponsor</Text>
              <Text style={styles.buttonText}>{showSponsor ? '-' : '+'}</Text>
            </TouchableOpacity>
            {showSponsor && (
              <View style={styles.inputContainer}>
                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showSponsor && fileName != "" ?'Image Dowonde':'select Image'}</Text>
                </TouchableOpacity>
                <TextInput
                  placeholder='Type'
                  value={type}
                  onChangeText={setType}
                  style={styles.input}
                />
                <TouchableOpacity onPress={SEND_SPONSOR} style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>

       <TouchableOpacity  onPress={()=>navigation.navigate('Home')}>
                  <Text style={{color:'red'}}>return</Text>
                </TouchableOpacity>


=======
      {/* Main Container */}
      <View style={styles.mainContainer}>
        {sections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.key)}
            >
              <Text style={styles.sectionTitle}>{section.name}</Text>
              <Text style={styles.toggleIcon}>{add[section.key] ? '-' : '+'}</Text>
            </TouchableOpacity>

            <Animated.View
              style={[
                styles.sectionContent,
                {
                  height: animations[section.key].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, hp(20)], // Adjust height for responsive expansion
                  }),
                  opacity: animations[section.key],
                },
              ]}
            >
              <TextInput placeholder="Title" style={styles.input} />
              <TextInput placeholder="Description" style={styles.input} />
              {section.key !== 'Three' && (
                <TextInput placeholder="Date" style={styles.input} />
              )}
              <TextInput placeholder="Upload File" style={styles.input} />
            </Animated.View>
          </View>
        ))}
      </View>
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
  },
  box: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  section: {
    marginVertical: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
=======
    padding: wp(5),
    backgroundColor: '#F2F2F2',
  },
  header: {
    width: '100%',
    marginTop: hp(5),
    alignItems: 'center',
  },
  headerText: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#333',
  },
  mainContainer: {
    width: '100%',
    marginTop: hp(3),
    alignItems: 'center',
  },
  sectionContainer: {
    width: wp(90),
    marginBottom: hp(2),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    height: hp(7),
    backgroundColor: '#0396A6',
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  sectionTitle: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  toggleIcon: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  sectionContent: {
    paddingHorizontal: wp(4),
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    padding: hp(1.5),
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: hp(1),
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  },
});
