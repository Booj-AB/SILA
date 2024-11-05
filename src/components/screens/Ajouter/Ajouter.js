import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function Acc() {
  const [add, setAdd] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
    Five : false ,
    six:false
  });
  const [fileName, setFileName] = useState('');

    const [object, setObject] = useState('');
     const [type, setType] = useState('');
    const [Title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');



  const pickDocument = async (type) => {
   if(type || type != ''){
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setObject(res[0].name); // Set the file name to state
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        Alert.alert('Error', 'Unable to pick the document');
      }
    }
    return
   }


    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res[0].name); // Set the file name to state
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        Alert.alert('Error', 'Unable to pick the document');
      }
    }
  };


  async function SEND(type) {
      switch (type) {
         case 'New':
              const res = await axios.post(`'http://localhost:9100/AddNew'`,{
                Title ,  des:description ,  date , Image : fileName
              })
              console.log(res);
              if(res.data.code=='01'){
                setTitle('')
                setDate('')
                setDescription('')
                setFileName('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
            break;



              case 'Mots':
               const res2 = await axios.post(`'http://localhost:9100/AddMots'`,{
                Title ,  des:description ,   Image : fileName
              })
              console.log(res2);
              if(res2.data.code=='01'){
                setTitle('')
                setDescription('')
                setFileName('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
            
            break;




               case 'ImageVd':

                const res3 = await axios.post(`'http://localhost:9100/AddImageVdPo'`,{object , type:'NoPod' })
              console.log(res3);
              if(res3.data.code=='01'){
                setObject('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
            
            break;



             case 'podcast':

                const res4 = await axios.post(`'http://localhost:9100/AddImageVdPo'`,{object:url , type:'podcast' })
              console.log(res4);
              if(res4.data.code=='01'){
                setObject('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
            
            break;



               case 'Pdf':

          const res5 = await axios.post(`'http://localhost:9100/AddPdf'`,{Pdf : fileName , type:type })
              console.log(res5);
              if(res5.data.code=='01'){
                setFileName('')
                setType('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
            
            break;



            case 'Date':
            const res6= await axios.post(`'http://localhost:9100/AddDate'`,{date : date , des:description })
              console.log(res6);
              if(res5.data.code=='01'){
                setDate('')
                setDescription('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }

            
            break;


            case 'spon':

                   const res7 = await axios.post(`'http://localhost:9100/AddParAndSponsor'`,{Image : fileName , type:type })
              console.log(res7);
              if(res7.data.code=='01'){
                setType('')
                setFileName('')
                Alert.alert(
                 "Data Sent",
                 `Done`,
                [{ text: "OK", onPress: () => console.log("") }]
    );
              }
              
            break;

          
      
         default:
            break;
      }
  }

  return (
    <View style={styles.container}>
      {/* Page Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Page</Text>
      </View>

      {/* Main Container */}
      <View style={styles.mainContainer}>
        <View style={styles.box}>
          {/* Section One */}
            <View style={styles.section}>
      <TouchableOpacity
        onPress={() => setAdd({ ...add, One: !add.One })}
        style={styles.toggleButton}
      >
        <Text style={styles.buttonText}>ajouter Dernieres Nouvelles</Text>
        <Text style={styles.buttonText}>{add.One ? '-' : '+'}</Text>
      </TouchableOpacity>
      {add.One && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Title'
            onChangeText={(e) => setTitle(e)} // Set title state
            value={Title}                     // Bind title state
            style={styles.input}
          />
          <TextInput
            placeholder='Description'
            onChangeText={(e) => setDescription(e)} // Set description state
            value={description}                     // Bind description state
            style={styles.input}
          />
          <TextInput
            placeholder='Date'
            onChangeText={(e) => setDate(e)}       // Set date state
            value={date}                             // Bind date state
            style={styles.input}
          />
          <TouchableOpacity onPress={pickDocument} style={styles.documentPicker}>
            <Text style={styles.buttonText}>{fileName || 'Upload Document'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>SEND('New')} style={styles.documentPicker}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>




          {/* Section Two */}
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, Two: !add.Two })}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter Mots</Text>
              <Text style={styles.buttonText}>{add.Two ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.Two && (
              <View style={styles.inputContainer}>

              <TextInput
            placeholder='Title'
            onChangeText={(e) => setTitle(e)} // Set title state
            value={Title}                     // Bind title state
            style={styles.input}
          />
          <TextInput
            placeholder='Description'
            onChangeText={(e) => setDescription(e)} // Set description state
            value={description}                     // Bind description state
            style={styles.input}
          />
        


                <TouchableOpacity onPress={pickDocument} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>{fileName || 'Upload Document'}</Text>
                </TouchableOpacity>


                  <TouchableOpacity onPress={()=>SEND('Mots')}  style={styles.documentPicker}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>





          {/* Section Three */}
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, Three: !add.Three })}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter Nos Partenaires</Text>
              <Text style={styles.buttonText}>{add.Three ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.Three && (
              <View style={styles.inputContainer}>
                <TextInput placeholder='Type'  value={type} onChangeText={(e)=>setType(e)} style={styles.input} />
                <TouchableOpacity onPress={pickDocument} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>{fileName || 'Upload Document'}</Text>
                </TouchableOpacity>

                  <TouchableOpacity  onPress={()=>SEND('spon')}  style={styles.documentPicker}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Section Four */}
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, Four: !add.Four })}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter Image Or Video dans page Presse</Text>
              <Text style={styles.buttonText}>{add.Four ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.Four && (
              <View style={styles.inputContainer}>
                <TextInput placeholder='type'   value={type} onChangeText={(e)=>setType(e)} style={styles.input} />
                   <TextInput placeholder='title'   value={Title} onChangeText={(e)=>setTitle(e)} style={styles.input} />
                      <TextInput placeholder='des'   value={description} onChangeText={(e)=>setDescription(e)} style={styles.input} />
                <TouchableOpacity onPress={()=>pickDocument('d')} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>{fileName || 'Upload Document'}</Text>
                </TouchableOpacity>


                 <TouchableOpacity  onPress={()=>SEND('ImageVd')} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

        { /* Five */}
            <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, Five: !add.Five })}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter Pdf</Text>
              <Text style={styles.buttonText}>{add.Five ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.Five && (
              <View style={styles.inputContainer}>
                <TextInput placeholder='type ' value={type} onChangeText={(e)=>setType(e)} style={styles.input} />
                <TouchableOpacity onPress={pickDocument} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>{fileName || 'Upload pdf'}</Text>
                </TouchableOpacity>


                 <TouchableOpacity onPress={()=>SEND('Pdf')} style={styles.documentPicker}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>



          
              <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, six: !add.six })}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter date</Text>
              <Text style={styles.buttonText}>{add.six ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.six && (
              <View style={styles.inputContainer}>
                <TextInput placeholder='date'  value={date} onChangeText={(e)=>setDate(e)} style={styles.input} />
                <TextInput placeholder='des'  value={description} onChangeText={(e)=>setDescription(e)} style={styles.input} />
            


                 <TouchableOpacity onPress={()=>SEND('Date')}  style={styles.documentPicker}>
                  <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>



         <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setAdd({ ...add, sev: !add.sev})}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>Ajouter Podcst</Text>
              <Text style={styles.buttonText}>{add.sev ? '-' : '+'}</Text>
            </TouchableOpacity>
            {add.sev && (
              <View style={styles.inputContainer}>
                <TextInput placeholder='Url'  value={url} onChangeText={(e)=>setUrl(e)} style={styles.input} />
                {/* <TextInput placeholder='type'  value={type} onPress={()=>setType('podcast')} style={styles.input} /> */}

         
                 <TouchableOpacity onPress={()=>SEND('podcast')}  style={styles.documentPicker}>
                  <Text style={styles.buttonText} >Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>


        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    elevation: 4, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  section: {
    position: 'relative',
    marginBottom: 15,
  },
  toggleButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#0396A6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    borderRadius: 4,
    cursor: 'pointer',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  inputContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 60,
    left: 0,
    width: '97%',
    padding: 15,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 4,
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    width: '100%',
    padding: 4,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  documentPicker: {
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
