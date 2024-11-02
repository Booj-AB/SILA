import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
const pdfUri ='https://drive.google.com/file/u/0/d/1xDYSlgLnZr2rd-6xKplMcyeBGl8uniLz/view';
import ReactNativeBlobUtil from 'react-native-blob-util';
import PdfRenderView from 'react-native-pdf-renderer'


 

const Exposant = () => {
    const [loading,setLoading] = useState(true);
    const [pdfPath,setPdfPath] = useState('');
    
    useEffect(()=>{
        const fetchProcess = ReactNativeBlobUtil.config({fileCache: true,appendExit:"pdf",}).fetch('GET',pdfUri);
        
        fetchProcess
        .then((res)=>{
            const path =res.path();
console.log("[path]:",path);
setPdfPath(path);
setLoading(false);


        }).catch(() => {
            setLoading(false);
        });


        return()=>{
            fetchProcess.cancel();
        }

    })
    if(loading){
        return  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<ActivityIndicator size='large' />
        </View>
    }
  return (
    <View  style={{flex:1}}>
      {!pdfPath &&(
        <Text>gfdghrdhgdreghtd</Text>
      )}
        {!pdfPath && (
            <PdfRenderView
            source={pdfPath}
            style={{borderWidth:1,borderColor:'red'}}
            distanceBetweenPages={16}
            maxZoom={5}/>
        )}
        
    </View>
  )
}

export default Exposant