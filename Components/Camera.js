import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs'
import { useSelector } from 'react-redux'

export default function Camera() {
      
    const [{cameraRef}, {takePicture}] = useCamera(null)

    const cameraIcon = useSelector(state => state.cameraIcon)
    const [images, setImages] = useState([])

    const handleCapture = async () => {
        try {
            const imageData = await takePicture();
            const imgPath = imageData.uri
            const newPath = RNFS.ExternalDirectoryPath + "/IMG" + (+ new Date()) + '.jpg'
            RNFS.moveFile(imgPath, newPath)
                .then(() => {
                    console.log(newPath);
                    console.log("File Saved Successfully!")
                })

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <View  style={styles.container}>
           { !cameraIcon ?  
            <RNCamera
                    ref={cameraRef}
                    type={RNCamera.Constants.Type.back} style={styles.preview}>

                <TouchableOpacity onPress={() => handleCapture()}>
                    <Icon name="camera" size={50} color="white" />
                </TouchableOpacity>
                </RNCamera> : 

                <Text>There should be a Gallery here!</Text>
            } 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
   
  });
  
