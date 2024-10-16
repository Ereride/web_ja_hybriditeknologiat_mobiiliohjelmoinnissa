import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {addDoc, collection, firestore, PRODUCTS, serverTimestamp, deleteDoc, doc} from './firebase/Config';
import { useEffect, useState } from 'react';
import { onSnapshot, orderBy, query} from 'firebase/firestore';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function App() {
  const [products, setproducts] = useState([])
  const [newproduct, setnewproduct] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([])

  const save = async () => {
    const docRef = await addDoc(collection(firestore, PRODUCTS), {
      text: newproduct,
      created: serverTimestamp()
    }).catch (error => console.log(error));

    setnewproduct('')
    console.log('product saved.')
  }

  useEffect(() => {
    const q = query(collection(firestore,PRODUCTS), orderBy('created', 'desc'))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempproducts = []
      querySnapshot.forEach((doc) => {
        tempproducts.push({...doc.data(), id: doc.id})
      })
      setproducts(tempproducts)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const handleDelete = async (id) => {
    try {
      const docRef = doc(firestore, PRODUCTS, id);
      await deleteDoc(docRef);
      console.log('Product deleted:', id);
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  };

  const toggleSelection = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(itemId => itemId !== id))
    } else {
      setSelectedProducts([...selectedProducts, id])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.form}>
        <TextInput
          placeholder='Add new item...'
          value={newproduct}
          onChangeText={text => setnewproduct(text)}
          onSubmitEditing={save}
        />
      </View>
      <View style={styles.form}>
      <ScrollView>
        {
          products.map((product) => (
            <View key={product.id} style={styles.product}>
              <TouchableOpacity onPress={() => toggleSelection(product.id)}>
                  <Text style={{
                    textDecorationLine: selectedProducts.includes(product.id) ? 'line-through' : 'none'
                  }}>
                    {product.text}
                  </Text>
                </TouchableOpacity>
                {
                  selectedProducts.includes(product.id) && (
                    <Ionicons name='trash' size={24} paddingLeft={8} onPress={() => handleDelete(product.id)} />
                  )
                }
            </View>
          ))
        }
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20
  },
  title: {
    margin: 8,
    fontSize: 24,
  },
  form:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  product: {
    margin: 8,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor:'#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productInfo: {
    fontSize: 12
  }
});
