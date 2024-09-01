import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[age, setAge] = useState('')
  const[lowhr, setLowhr] = useState(0)
  const[highhr, setHighhr] = useState(200)


  const calculate = () => {
    const lowHeartRate = (220-age)*0.65
    const highHeartRate = (220-age)*0.85
    setLowhr(lowHeartRate)
    setHighhr(highHeartRate)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
      style={styles.field}
      placeholder='Age'
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='number-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowhr.toFixed(0)}-{highhr.toFixed(0)}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 50,
    margin: 8,
    paddingLeft: 20
  }, 
  field:{
    marginTop: 8,
    marginBottom: 8,
  }
});
