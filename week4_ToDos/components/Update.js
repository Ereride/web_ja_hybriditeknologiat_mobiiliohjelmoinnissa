import React, { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Update({item, setData, setIsEditing, isEditing}) {
    const [newText, setNewText] = useState (item.name)

    const update = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setData(prevData =>
            prevData.map(currentItem =>
                currentItem.id === id ? { ...currentItem, name: newValue.text} : currentItem
            )
        )
        setIsEditing(false)
    }

    const handleUpdate = (id) => {
        update(item.id, {text: newText})
        setNewText('')
    }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newText}
            onChangeText={setNewText}
          />
          <Ionicons
            name="checkmark"
            size={24}
            onPress={handleUpdate}
          />
          <Ionicons
            name="close"
            size={24}
            onPress={() => {
                setIsEditing(false);
                setNewText('');
            }}
          />
        </View>
      ) : (
        <Ionicons
          name="create"
          size={24}
          onPress={() => {
            setIsEditing(true);
            setNewText(item.name);
          }}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80', 
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 8,
      flex: 1,
      marginRight: 10,
    },
  });