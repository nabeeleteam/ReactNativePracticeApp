import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNav from './Components/DrawerNav';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { ContextProvider } from './Components/ContextAPI';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import reducers from './Components/reduxStore/reducers';
import { createStore } from 'redux'

const store = createStore(reducers)

export default function App() {
  
  useEffect(() => {
    SplashScreen.hide()
    return () => {
      
    }
  }, [])

  return (
    <>
    <Provider store={store}>
        <NavigationContainer>
        <ContextProvider>

          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Drawer" component={DrawerNav} />
          </Stack.Navigator>
          </ContextProvider>

        </NavigationContainer>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({})
