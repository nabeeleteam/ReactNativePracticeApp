import React, {useContext, createContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ContextAPI = createContext()

export const ContextProvider = (props) => {

    // Declaring the state object globally.
    const [headerLable, setHeaderLable] = useState('Context API')

    return (
        <ContextAPI.Provider value={[headerLable, setHeaderLable]}>
            {props.children}
        </ContextAPI.Provider>
    )
}

const styles = StyleSheet.create({})
