import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function ScreenTwo() {
    const image = { uri: "youtube" };

    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Youtube</Text>
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
  
