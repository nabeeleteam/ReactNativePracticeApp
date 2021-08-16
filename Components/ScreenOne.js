import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Button} from 'react-native-paper'
import { increment, decrement } from './reduxStore/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function ScreenOne() {
    const image = { uri: "home" };
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()


    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Button mode="contained" onPress={() => dispatch(increment())}>
                +
            </Button>
            <Text style={styles.text}>{counter}</Text>
            <Button mode="contained" onPress={() => dispatch(decrement())}>
                -
            </Button>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
