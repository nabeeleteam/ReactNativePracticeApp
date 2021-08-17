import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import * as ImagePicker from "react-native-image-picker"
import { useSelector } from 'react-redux'
import Icons from 'react-native-vector-icons/FontAwesome';
import RNFS from 'react-native-fs'

export default function ImgPicker() {

    const [photo, setPhoto] = useState(null)
    const cameraIcon = useSelector(state => state.cameraIcon)
    const [file, setFile] = useState()

    const selectFile = () => {
        var options = {
          noData: true
        };
    
        ImagePicker.launchImageLibrary(options, res => {
            if(res.assets[0].uri)
                setPhoto(res.assets[0])            
        });
      };

      const cameraLaunch = () => {

        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.launchCamera(options, (res) => {
    
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            const uri = res.assets[0].uri;

            const APP_FOLDER_NAME = 'ReactNative';
            const pictureFolder = `/storage/emulated/0/DCIM/${APP_FOLDER_NAME}`;

            RNFS.mkdir(pictureFolder)
            .then((result) => {
                console.log('result')
            })
            .catch((err) => {
                console.warn('err', err)
            })

            const fileName = "IMG_"+new Date().getTime()+".jpg";

            RNFS.moveFile(`${uri}`, `${pictureFolder}/${fileName}`)
                .then(() => console.log("Photo moved to Pictures Directory"))
                .catch((e) => console.log(e))

            setPhoto(res.assets[0])            
        }
        });
    }

    return (
        <>
            <View style={styles.container}>
                {photo && <Image
                    source={{
                        uri: photo.uri,
                    }}
                    style={{ width: 300, height: 500 }}
                />}

                <View style={styles.row}>
                    <TouchableOpacity onPress={selectFile} style={styles.button}  >
                            <Text style={styles.buttonText}><Icons name='image' size={18} color="white"></Icons>  Select Image</Text>
                    </TouchableOpacity>       

                    <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >
                            <Text style={styles.buttonText}><Icons name='camera' size={18} color="white"></Icons>  Open Camera</Text>
                    </TouchableOpacity>   
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,                                                                                                                                                                                                                                  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      },
      button: {
        width: 150,
        height: 40,
        backgroundColor: '#3740ff',
        justifyContent: 'center',
        borderRadius: 4,
        marginEnd: 8    
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
      },

      row: {
        flex: 1,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }
})
