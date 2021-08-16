import React, { useContext, useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Settings from './Settings';
import Icons from 'react-native-vector-icons/FontAwesome';
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ContextAPI } from './ContextAPI'
import { useDispatch } from 'react-redux'
import { updatelabel } from './reduxStore/actions/actions'

const Tab = createMaterialTopTabNavigator();

export default function TopTabls() {
    
    const route = useRoute();
    const [headerLable, setHeaderLable] = useContext(ContextAPI)
    const dispatch = useDispatch()

    useEffect(() => {
        const activeScreen = getFocusedRouteNameFromRoute(route)
        dispatch(updatelabel(activeScreen))

        const label = activeScreen ?? 'Add Item'
        dispatch(updatelabel(label))
        
        if(activeScreen == 'Settings') {
            dispatch(updatelabel('Items List'))
        } else if(activeScreen == 'Home'){
            dispatch(updatelabel('Add Item'))
        }

      },[getFocusedRouteNameFromRoute(route)]);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name="Home" component={Home}   
                options={{
                    tabBarIcon: () => <Icons name='plus-circle' size={25} color="green"></Icons>
                }}
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                    tabBarIcon: () => <Icons name='list-alt' size={25} color="blue"></Icons>
                }}
            />
        </Tab.Navigator>
    )
}