import { StyleSheet} from 'react-native';
import FirstPage from './Sheets/FirstPage';
import SecondPage from './Sheets/SecondPage';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainBar from './Components/MainBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        header:(props) => <MainBar {...props}/>
      }}>
        <Stack.Screen name="MD Nav Demo First" component={FirstPage} />
        <Stack.Screen name="MD Nav Demo Second" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
