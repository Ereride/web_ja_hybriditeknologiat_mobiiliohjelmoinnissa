import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


export default function SecondPage() {
  return (
    <View style={style.container}>
      <Text>Second Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });