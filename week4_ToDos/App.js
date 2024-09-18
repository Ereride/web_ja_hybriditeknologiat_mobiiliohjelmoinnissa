import { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import Constants from 'expo-constants';
import Row from './components/Row';
import Add from './components/Add';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY ='@items_key'

export default function App() {
 const [data, setData] =useState([])
 const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    //AsyncStorage.clear()
    getData()
  }, [])

 useEffect(() => {
  storeData(data)
 }, [data])

 const add = useCallback((name) => {
  const newItem = {
    id: uuid.v4(),
    name: name
  }
  const tempData = [...data,newItem]
  setData(tempData)
 }, [data])

 
 const select = (id) => {
  setSelectedId(id)
 }

 const getData = async() => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    const json = JSON.parse(value)
    if (json === null) {
      json = []
    }
    setData(json)
  } catch (ex) {
    console.log(ex)
  }
 }

 const storeData = async(value) => {
  try {
    const json = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE_KEY,json)
  } catch (ex) {
    console.log(ex)
  }
 }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tehtävä lista</Text>
      <Add add= {add} setData={setData}/>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      renderItem={({item}) => (
        <Row 
        item={item}
        selectedId={selectedId}
        select={select}
        data = {data}
        setData = {setData}
        />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    
  },

  title: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
}
});
