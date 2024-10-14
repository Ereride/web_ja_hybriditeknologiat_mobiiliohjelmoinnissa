import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useReducer, useState } from 'react';


const initialState = {
  todos: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state, 
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
    case 'remove':
      return {
        ...state, 
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');


  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'add', payload: inputValue });
      setInputValue(''); 
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: 'remove', payload: id });
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Todo list</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write task"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Save" onPress={addTodo} />
      </View>

      <FlatList
        data={state.todos} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTodo(item.id)}>
            <Text style={styles.todoItem}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10, 
  },
  todoItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});

export default TodoApp;
