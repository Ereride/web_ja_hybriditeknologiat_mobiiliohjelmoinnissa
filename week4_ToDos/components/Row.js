import { Text, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Update from './Update'

export default function Row({item, data, setData}) {
    const backgroundColor = item.isComplete ? '#f0f0f0' : '#fff'
    const [isEditing, setIsEditing] = useState(false)

    const remove = () => {
        const arrayWithoutRemoved = data.filter((currentItem) => currentItem.id !== item.id);
        setData(arrayWithoutRemoved);
    }

    const completeTask = () => {
        const updateData = data.map(todo => 
            todo.id === item.id ? {...todo, isComplete: !todo.isComplete} : todo
        )
    setData(updateData)
    }


  return (
    <Pressable style={[styles.row, { backgroundColor }]}>
         {!isEditing ? ( 
                <Text style={[styles.rowText, item.isComplete && styles.completeText]} onPress={completeTask}>
                    {item.name}
                </Text>
            ) : null}
            <View style={styles.iconContainer}>
                <Update item={item} setData={setData} setIsEditing={setIsEditing} isEditing={isEditing} />
                <Ionicons name='trash' size={24} paddingLeft={8} onPress={remove} />
            </View>
            {isEditing && (
            <View style={styles.editContainer}>
                    <Update item={item} setData={setData} setIsEditing={setIsEditing} isEditing={isEditing} />
            </View>
            )}

</Pressable>
  )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative', // Lisää tämä
    },
    rowText: {
        fontSize: 16,
        padding: 4,
        margin: 4,
        flex: 1,
    },
    completeText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editContainer: {
        position: 'absolute', // Aseta input-ikkuna absoluuttisesti
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1, // Varmista, että input-ikkuna on roskakorin päällä
    },
});