//App.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, Keyboard, KeyboardAvoidingView } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import Temperature from './screens/TemperatureScreen.js'
import DataScreen from './screens/DataScreen.js';
import AccountScreen from './screens/AccountScreen.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={MainApp}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Temperature" component={Temperature} options={{ headerShown: false }}/>
        <Stack.Screen name="DataScreen" component={DataScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainApp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = () => {
    if (username === 'Casa' && password === 'Qwerty09') {
      navigation.navigate('HomeScreen');
      setUsername(''); 
      setPassword(''); 
    } else {
      Alert.alert('Error de login', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Icon.Ionicons name="wifi-sharp" size={150} color="white" />
      </View>
      {!keyboardVisible && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>MylHouse</Text>
        </View>
      )}
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {!keyboardVisible && (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#486EEB',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  img:{
    position: 'absolute',
    top: 80,
    zIndex: 1,
    backgroundColor:'#6D8EEF',
    width:'60%',
    height:'29%',
    borderRadius:1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    backgroundColor: '#6D8EEF',
    height:'50%',
    width: '100%',
    paddingHorizontal: 60,
    paddingTop:40,
    paddingBottom: 20,
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom:20,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    color:'gray'
  },
  button: {
    backgroundColor: '#486EEB',
    alignItems: 'center',
    justifyContent: 'center',
    width:'50%',
    height: 40,
    marginTop: 30,
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily:'monospace',
    fontWeight: '600',
  },
  textContainer: {
    position: 'absolute',
    top: '45%',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text:{
    backgroundColor:'white',
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:50,
    paddingRight:50,
    fontSize:45,
    color:'#4B75F2',
    borderRadius:20,
    fontWeight: '900',
  }
});
