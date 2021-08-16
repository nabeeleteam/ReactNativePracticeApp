import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';
import { useNavigation, DrawerActions, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ContextAPI } from './ContextAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Snackbar  } from 'react-native-paper';
import { useSelector } from 'react-redux'

export default function AppHeader() {

    const navigation = useNavigation();
        
    const [headerLable, setHeaderLable] = useContext(ContextAPI)
    const [visible, setVisible] = useState(false)
    const [snackVisible, setSnackVisible] = useState(false)

    const onDismissSnackBar = () => setSnackVisible(false)
    const appHeaderLable = useSelector(state => state.appHeaderLable)

    const clearStorage = () => {
        AsyncStorage.clear()
        setSnackVisible(true)
    } 


    useEffect(() => {

        setVisible(false)
        
        if(appHeaderLable == "Items List") {
            setVisible(true)
        }

        return () => {
            
        }
    }, [appHeaderLable])


    return (
        <>
        <Appbar.Header>
            <Icons name='bars' size={22} color="#fff" onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}></Icons>
            <Appbar.Content title={appHeaderLable}/>
            {
                visible && <Appbar.Action icon="trash-can-outline" onPress={clearStorage}/>
            }
        </Appbar.Header>

        <Snackbar
            visible={snackVisible}
            duration={2000}
            onDismiss={onDismissSnackBar}>
            AsyncStorage cleared.
        </Snackbar>
        </>
    )
}

const styles = StyleSheet.create({})
