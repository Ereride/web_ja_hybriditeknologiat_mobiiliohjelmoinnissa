import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
      animationType='slide'
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalMessage}>This is modal....</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textClose}>Close</Text>
            </Pressable>
          </View>
        </View> 
      </Modal>
      <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
        <Text style = {styles.textStyle}>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
      centeredView: {
        flex: 1,
        marginTop: 120,
        alignItems: 'center'
      },
      modalView: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalMessage: {
        marginTop: 20,
        marginBottom: 40
      },

      button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
      },
      textStyle: {
        fontSize:16
      },
      textClose: {
        fontWeight: 'bold',
        marginBottom: 0
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    });
