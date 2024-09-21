import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Add({add}) {
    const [task, setTask] = useState('')
    
    const save = () => {
        add(task)
        setTask('')
    }

  return (
    <View style={styles.container}>
      <TextInput
        style ={styles.form} 
        value={task} 
        placeholder='Enter task' 
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: 16,
    },
  
    form: {
      flex: 1,
      fontSize: 18,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginRight: 10, 
    },
  
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      justifyContent: 'center', 
    },
  
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center', 
    },
  });