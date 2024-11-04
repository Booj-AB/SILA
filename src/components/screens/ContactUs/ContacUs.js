import React, { useRef } from 'react';
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
import Header from '../../header';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const INPUT_WIDTH = SCREEN_WIDTH * 0.8;

const ContactUs = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

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

          

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Nom"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>

        <Animated.View style={[styles.inputBox, { transform: [{ scale: scaleAnim }] }]}>
          <TextInput
            placeholder="Subject"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
          />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ajouter')}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

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
    container2: {
    position: 'absolute',
    left: 20,
    top: 10,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    zIndex: 1, 
  },
  button2: {
    backgroundColor: '#0396A6',
    padding: 5,
    height:30,
    width: '20%', 
    borderRadius: 7,
    borderWidth: 0, 
    alignItems: 'center', 
  },
  buttonText2: {
    color: '#FFF',
    fontWeight:'bold'
  },
});

export default ContactUs;
