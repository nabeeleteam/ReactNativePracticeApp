import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Snackbar, Button  } from 'react-native-paper';

export default function Home({navigation}) {

    const [key, setKey] = useState()
    const [val, setVal] = useState()
    const [visible, setVisible] = useState(false)
    const [keyError, setKeyError] = useState(false)
    const [valError, setValError] = useState(false)

    const onDismissSnackBar = () => {
        setVisible(false);
        setKey('')
        setVal('')
        setKeyError(false)
        setValError(false)
        navigation.navigate('Settings');
    }
    const storeData = async () => {
        try {
            key ? setKeyError(false) : setKeyError(true)
            val ? setValError(false) : setValError(true)

            if(key && val) {
                await AsyncStorage.setItem(key, val)
                setVisible(true)
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    const keyInputChange = (e) => {
        let value = e.nativeEvent.text
        setKey(value.trim())
        key ? setKeyError(false) : setKeyError(true)
    }

    const valInputChange = (e) => {
        let value = e.nativeEvent.text
        setVal(value.trim())
        val ? setValError(false) : setValError(true)
    }

      return (
        <>
        <View style={styles.container}>
            {keyError && <Text style={styles.error}>Storage Key field is required.</Text>}

            <TextInput style={styles.textBox}
                onChange={(e) => keyInputChange(e)}
                mode="outlined"
                label="Storage Key"
                placeholder="Type something"
                value={key}
                theme={keyError && { colors: { primary: 'red',underlineColor:'transparent',}}}
                outlineColor={keyError && "red"}
                right={<TextInput.Affix text="/20"/>}
            />
        
            {valError && <Text style={styles.error}>Storage Value field is required.</Text>}

            <TextInput style={styles.textBox}
                onChange={(e) => valInputChange(e)}
                mode="outlined"
                label="Storage Value"
                placeholder="Type something"
                value={val}
                outlineColor={valError && "red"}
                theme={valError && { colors: { primary: 'red',underlineColor:'transparent',}}}
                right={<TextInput.Affix text="/50" />}
            />

            <Button icon="floppy" mode="contained"onPress={storeData} style={styles.addBtn}>
                Add
            </Button>

        </View>

        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
                label: 'OK',
            }}>
            Item added in AsyncStorage.
        </Snackbar>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },

    textBox: {
        marginBottom: 15
    },


    addBtn: {
        height: 40,
        backgroundColor: 'green',
    },

    error: {
        color: "red"
    } 
})
