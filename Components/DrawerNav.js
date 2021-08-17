import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import Icons from 'react-native-vector-icons/FontAwesome';
import TopTabls from './TopTabls';
import AppHeader from './AppHeader';
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ContextAPI } from './ContextAPI'
import { useDispatch } from 'react-redux'
import { updatelabel } from './reduxStore/actions/actions'

import Camera from './Camera';
import ImgPicker from './ImagePicker';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    
    const route = useRoute();
    const [headerLable, setHeaderLable] = useContext(ContextAPI)

    const dispatch = useDispatch()

    useEffect(() => {
      const activeScreen = getFocusedRouteNameFromRoute(route)
      const label = activeScreen ?? 'Home'
      dispatch(updatelabel(label))
      activeScreen == 'MaterialTop' ? dispatch(updatelabel('Add Item')) : dispatch(updatelabel(label))
    },[getFocusedRouteNameFromRoute(route)]);

    return (
        <>
        <AppHeader/>
        <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {backgroundColor: "#efe"},
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={ScreenOne} 
          options={{
            drawerIcon: () => <Icons name='home' size={25} color="green"></Icons>
          }}
        
        />
        <Drawer.Screen name="Youtube" component={ScreenTwo} 
          options={{
            drawerIcon: () => <Icons name='youtube-play' size={25} color="red"></Icons>
          }}
        />

        <Drawer.Screen name="Gallery" component={Camera} 
          options={{
            drawerIcon: () => <Icons name='camera' size={25} color="black"></Icons>
          }}
        />

        <Drawer.Screen name="Image Picker" component={ImgPicker}
          options={{
            drawerLabel: 'Image Picker',
            drawerIcon: () => <Icons name='camera' size={25} color="blue"></Icons>
          }}
        />
      
      <Drawer.Screen name="MaterialTop" component={TopTabls} 
          options={{
            drawerLabel: 'Async Storage',
            drawerIcon: () => <Icons name='file-archive-o' size={25} color="blue"></Icons>
          }}
        />
      
      </Drawer.Navigator>
      </>
    )
}

const styles = StyleSheet.create({})
