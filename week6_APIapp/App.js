import { View, Text, StyleSheet, TextInput, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');  // User input for Pokémon name
  const [pokemon, setPokemon] = useState(null);         // To store fetched Pokémon
  const [typeRelations, setTypeRelations] = useState([]); // To store type relations
  const [loading, setLoading] = useState(false);        // Loading state
  const [error, setError] = useState(null);             // Error handling

  // Function to fetch Pokémon data
  const fetchPokemon = async () => {
      const formattedName = pokemonName.trim().toLowerCase().replace(/ /g, '-')
      if (formattedName === '') return; // Do not fetch if name is empty

      console.log('Formatted Pokémon Name:', formattedName);

      setLoading(true);
      setError(null);
      try {
          const response = await fetch(BASE_URL + formattedName); 
          if (!response.ok) {
              throw new Error('Pokémon not found');
          }
          const json = await response.json();
          setPokemon(json); // Store Pokémon data

          // Fetch type relations for each type of the Pokémon
          const typeData = await Promise.all(
              json.types.map(async (type) => {
                  const typeResponse = await fetch(type.type.url); // Fetch type details
                  return await typeResponse.json(); // Return type details
              })
          );

          // Combine type relations from all types
          const combinedRelations = typeData.map(type => type.damage_relations);
          setTypeRelations(combinedRelations); // Store type relations

      } catch (err) {
          setError(err.message);
          setPokemon(null); // Clear Pokémon data on error
      } finally {
          setLoading(false);
      }
  };

  return (
      <View style={styles.container}>
          <Text style={styles.infotext}>Jos et tiedä pokemonien nimiä näillä pokemoneilla voi testata: Jolteon, Rotom, Solgaleo tai Slither wing</Text>
          <Text style={styles.title}>Search Pokémon</Text>
          <View style={styles.searcharea}>
              <TextInput
                  style={styles.input}
                  placeholder="Enter Pokémon name"
                  value={pokemonName}
                  onChangeText={text => setPokemonName(text)} // Update the Pokémon name
              />
              <TouchableOpacity style={styles.button} onPress={fetchPokemon}>
                  <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
          </View>
          {loading && <Text>Loading...</Text>}

          {error && <Text style={styles.error}>{error}</Text>}

          {pokemon && !loading && (
              <ScrollView style={styles.scrollview}>
                  <View style={styles.imagearea}>
                      <Image
                          source={{ uri: pokemon.sprites.front_default }}
                          style={styles.spriteImage}
                          onError={() => console.log('Failed to load front sprite')}
                      />
                      {/* Back sprite image */}
                      <Image
                          source={{ uri: pokemon.sprites.front_shiny }}
                          style={styles.spriteImage}
                          onError={() => console.log('Failed to load back sprite')}
                      />
                  </View>
                  <Text>ID: {pokemon.id}</Text>
                  <Text>Name: {pokemon.name}</Text>
                  <Text>Type(s):</Text>
                  {pokemon.types.map((type, index) => (
                      <Text key={index}>- {type.type.name}</Text>
                  ))}
                  <Text style={styles.mediumtitle}>Weaknesses:</Text>
                  {typeRelations.map((relations, index) => (
                      <View key={index}>
                          <Text style={styles.typeText}>Type: {pokemon.types[index].type.name}</Text>
                          <Text style={styles.smalltitle}>  Double Damage From:</Text>
                          {relations.double_damage_from.map((weakType, i) => (
                              <Text key={i}>    - {weakType.name}</Text>
                          ))}
                          <Text style={styles.smalltitle}>  Half Damage From:</Text>
                          {relations.half_damage_from.map((resistType, i) => (
                              <Text key={i}>    - {resistType.name}</Text>
                          ))}
                          <Text style={styles.smalltitle}>  No Damage From:</Text>
                          {relations.no_damage_from.map((immuneType, i) => (
                              <Text key={i}>    - {immuneType.name}</Text>
                          ))}
                      </View>
                  ))}
              </ScrollView>
          )}

          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 60,
      margin: 8
  },

  infotext : {
      marginBottom: 8
  },

  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
  },
  mediumtitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
      marginTop: 16
  },
  smalltitle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 4,
      marginTop: 4,
  },
  typeText: {
      fontStyle: 'italic',
      fontSize: 14,
      color: 'blue',
      marginTop: 10, // Adjust this value to increase/decrease space
  },

  searcharea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 20,
      marginLeft: 20,

  },

  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      marginRight: 12,
      marginLeft: 12,
      paddingLeft: 8,
      width: '80%',
  },

  button: {
      backgroundColor: '#007BFF', // Button background color
      paddingVertical: 10, // Vertical padding to match input height
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center text in button
      width: '20%', // Full width
      marginBottom: 16, // Space below the button
  },

  buttonText: {
      color: '#fff', // Button text color
      fontSize: 16, // Button text size
      fontWeight: 'bold', // Button text weight
  },

  scrollview: {
      marginTop: 20,
      width: '80%',
  },

  imagearea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  spriteImage: {
      width: 120, // Adjust size as needed
      height: 120, // Adjust size as needed
      marginBottom: 10, // Space between images
  },
  error: {
      color: 'red',
      marginTop: 8,
  },
});
