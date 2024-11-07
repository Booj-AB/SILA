<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
import React, { useRef, useState } from 'react';



import axios from 'axios'
<<<<<<< HEAD
=======
import React, { useRef } from 'react';
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
<<<<<<< HEAD

=======
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======

>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const INPUT_WIDTH = SCREEN_WIDTH * 0.8;

const ContactUs = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
<<<<<<< HEAD
=======
  const scaleAnim = useRef(new Animated.Value(1)).current;
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1

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

=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
      const res =  await axios.post(`http://102.220.30.73/api/addMessage` , data)
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
<<<<<<< HEAD

          

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Nom"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
<<<<<<< HEAD
            value={name}
            onChangeText={setName}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
            value={name}
            onChangeText={setName}
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
<<<<<<< HEAD
            value={email}
            onChangeText={setEmail}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
            value={email}
            onChangeText={setEmail}
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Subject"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
<<<<<<< HEAD
<<<<<<< HEAD
            value={subject}
            onChangeText={setSubject}
=======
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
            value={subject}
            onChangeText={setSubject}
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
=======
            value={message}
            onChangeText={setMessage}
          />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
<<<<<<< HEAD
=======

>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
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
=======
  container2: {
    position: 'absolute',
    left: 20,
    top: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 1,
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
  },
  button2: {
    backgroundColor: '#0396A6',
    padding: 5,
<<<<<<< HEAD
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
=======
    height: 30,
    width: '20%',
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
    borderRadius: 7,
    borderWidth: 0,
    alignItems: 'center',
  },
  buttonText2: {
    color: '#FFF',
<<<<<<< HEAD
    fontWeight:'bold'
>>>>>>> b0ef529fbb98a01e9a555e21a409a8cfa53e239f
=======
    fontWeight: 'bold',
>>>>>>> d4aea90735512b14b5a3c36ea6468d9e1918b5a1
  },
});

export default ContactUs;
