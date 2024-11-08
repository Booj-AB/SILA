<<<<<<< HEAD
<<<<<<< HEAD
import axios from 'axios';
import { Button } from 'native-base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
=======
import axios from 'axios';
import { Button, } from 'native-base';
import React, { useEffect, useState } from 'react';
import {  ScrollView,View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs'; // Import the react-native-fs library
import ImageResizer from 'react-native-image-resizer'; // Import the image resizer
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD


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
=======
import { launchImageLibrary } from 'react-native-image-picker';
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1


export default function Ajouter() {
  const [arr, setArr] = useState({
     vist :'' , 
     tit: '' ,
     expo : '',
     paysAf:'',
     pays:'',
     sur:''
  })
  const [relode , setRelode] = useState(false)
  useEffect(()=>{
      getPro()
  },[relode])

    async function update() {
      console.log(arr);
      
      const res = await axios.post('http://102.220.30.73/api/UpdatePro',{
        sur:arr.sur , pays:arr.pays , paysAfr:arr.paysAf , vis:arr.vist  , titres:arr.tit , expo:arr.expo
      })
      if(res.data.code == '01'){
        setRelode(p=>!p)
        Alert.alert("Data Sent", "Done", [{ text: "OK" }]);
       
      }
    }  

  async function getPro() {
      const res = await axios.get('http://102.220.30.73/api/getPro')
      setArr({
         vist :res.data.pro.visit, 
         tit: res.data.pro.titer  ,
         expo : res.data.pro.expo ,
         paysAf:res.data.pro.paysAfrican,
         pays:res.data.pro.pays,
         sur:res.data.pro.surface
      })
  }

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
  const [image, setImage] = useState('')

<<<<<<< HEAD
    Animated.timing(animations[key], {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======

   const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.error('ImagePicker Error:', response.errorMessage);
        } else {
          setImage(response.assets[0].uri); // Set the image URI
        }
      }
    );
  };




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

const [urlPdf , setUrlPdf] = useState('')


  // Function to send data to the server
  const sendRequest = async (endpoint, data, resetFields) => {
    console.log(data);
    console.log(resetFields);
    console.log(endpoint);
    
    try {
      const res = await axios.post(`http://102.220.30.73/api/${endpoint}`, data);
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
    sendRequest('AddImageVdPo', { Object : fileName, type: type , des: description , Title:title }, resetFields);
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
    sendRequest('AddPdf', { Pdf: urlPdf , Image : fileName, type , Title:title , des:description }, resetFields);
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
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Page Header */}
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
      <View style={styles.header}>
        <Text style={styles.headerText}>Page</Text>
      </View>

<<<<<<< HEAD
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
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
      <View style={styles.mainContainer}>
        <ScrollView style={styles.box}>
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
                <TextInput
                  placeholder='Titel'
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                />

                <TextInput
                  placeholder='des'
                  value={description}
                  onChangeText={setDescription}
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


                <TextInput
                  placeholder='des '
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Titel'
                  value={title}
                  onChangeText={setTitle}
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
                <TextInput
                  placeholder='Url '
                  value={urlPdf}
                  onChangeText={setUrlPdf}
                  style={styles.input}
                />
                <TextInput
                  placeholder='des '
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Titel'
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                />

                <TouchableOpacity onPress={pickDocument} style={styles.button}>
                  <Text style={styles.buttonText}>{showPdf && fileName!=''?'Image dowlonde':'select Image'}</Text>
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


          <View>
               


                 <TextInput
                  placeholder='surface'
                  value={arr.sur}
                  onChangeText={(e)=>setArr({...arr , sur : e})}
                  style={styles.input}
                />

                 <TextInput
                  placeholder='pays'
                   value={arr.pays}
                   onChangeText={(e)=>setArr({...arr , pays : e})}
                  style={styles.input}
                />

                 <TextInput
                   onChangeText={(e)=>setArr({...arr , paysAf : e})}
                   value={arr.paysAf}
                  style={styles.input}
                />

                 <TextInput
                  placeholder='expo'
                  value={arr.expo}
                   onChangeText={(e)=>setArr({...arr , expo : e})}
                  style={styles.input}
                />


                <TextInput
                  placeholder='titres'
                  value={arr.tit}
                   onChangeText={(e)=>setArr({...arr , tit : e})}
                  style={styles.input}
                />

                 <TextInput
                  placeholder='visit'
                  value={arr.vist}
                   onChangeText={(e)=>setArr({...arr , vist : e})}
                  style={styles.input}


                />


                <TouchableOpacity style={{width:'100%', padding:10 , backgroundColor:'green'}} onPress={update}>
                   <Text>Updet</Text>
                </TouchableOpacity>


            


          </View>

        
          
        </ScrollView>
      </View>
<<<<<<< HEAD
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======

       <TouchableOpacity  onPress={()=>navigation.navigate('Home')}>
                  <Text style={{color:'red'}}>return</Text>
                </TouchableOpacity>


>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
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
=======
    backgroundColor: '#F5F5F5',
    padding: 10,
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
<<<<<<< HEAD
    borderColor: '#ddd',
    marginBottom: hp(1),
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
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
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
  },
});
