<<<<<<< HEAD
import React, { useRef, useState } from 'react';



import axios from 'axios'
=======
import React, { useRef } from 'react';
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD

=======
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const INPUT_WIDTH = SCREEN_WIDTH * 0.8;

const ContactUs = () => {
<<<<<<< HEAD

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
=======
  const scaleAnim = useRef(new Animated.Value(1)).current;
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f

  const handleFocus = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.05,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

<<<<<<< HEAD
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      subject,
      message,
    };

    console.log('Dta' , data);
    // return

    try {
      const res =  await axios.post(`http://10.0.2.2:9400/api/addMessage` , data)
      console.log(res);
      
      if (res.data.code == '001') {
         navigation.navigate('Ajouter')
      } else {
        navigation.navigate('Home')
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button2} onPress={handleBackPress}>
          <Text style={styles.buttonText2}>Back</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.formContainer}>
=======

  const navigation = useNavigation(); 

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (


    

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* <Header title={'Contac Us'}/> */}

       <View style={styles.container2}>
               <TouchableOpacity style={styles.button2} onPress={ handleBackPress}>
                  <Text style={styles.buttonText2}>Back</Text>
               </TouchableOpacity>
           </View>

      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.formContainer}>

          

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Nom"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
            value={name}
            onChangeText={setName}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
            value={email}
            onChangeText={setEmail}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Subject"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
            value={subject}
            onChangeText={setSubject}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Message"
            style={[styles.input, styles.textArea]}
            multiline={true}
            numberOfLines={4}
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
            value={message}
            onChangeText={setMessage}
          />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
=======
          />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ajouter')}>
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
<<<<<<< HEAD
=======

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
<<<<<<< HEAD
=======

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  },
  inputBox: {
    width: INPUT_WIDTH,
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0396A6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: INPUT_WIDTH,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
<<<<<<< HEAD
  container2: {
    position: 'absolute',
    left: 20,
    top: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 1,
=======
    container2: {
    position: 'absolute',
    left: 20,
    top: 10,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    zIndex: 1, 
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  },
  button2: {
    backgroundColor: '#0396A6',
    padding: 5,
<<<<<<< HEAD
    height: 30,
    width: '20%',
    borderRadius: 7,
    borderWidth: 0,
    alignItems: 'center',
  },
  buttonText2: {
    color: '#FFF',
    fontWeight: 'bold',
=======
    height:30,
    width: '20%', 
    borderRadius: 7,
    borderWidth: 0, 
    alignItems: 'center', 
  },
  buttonText2: {
    color: '#FFF',
    fontWeight:'bold'
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
  },
});

export default ContactUs;
