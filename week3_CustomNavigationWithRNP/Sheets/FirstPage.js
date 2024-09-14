import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import MainBar from '../Components/MainBar';

export default function FirstPage({navigation}) {
  return (
    <View style={style.container}>
      <Text>First Screen</Text>
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