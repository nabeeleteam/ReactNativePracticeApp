import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';

export default function Settings() {

    const [items, setItems] = useState()

    const fetchAllItems = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            
            const itemsArray = []
            let counter = 1;
            for (let key of keys) {
                
                const valueOfKey =  await AsyncStorage.getItem(`${key}`)

                let item = (
                    <DataTable.Row key={counter}>
                        <DataTable.Cell>{counter}</DataTable.Cell>
                        <DataTable.Cell>{key}</DataTable.Cell>
                        <DataTable.Cell>{valueOfKey}</DataTable.Cell>
                    </DataTable.Row>
                )

                itemsArray.push(item)
                counter++
            }

            setItems(itemsArray)  

        } catch (error) {
            console.log(error, "problem")
        }
    }

    useEffect(() => {
        fetchAllItems()
        return () => {
            
        }
    }, [items])

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>S#</DataTable.Title>
                <DataTable.Title>Key</DataTable.Title>
                <DataTable.Title>Value</DataTable.Title>
            </DataTable.Header>

            {items}
        </DataTable>
    )
}

const styles = StyleSheet.create({})
