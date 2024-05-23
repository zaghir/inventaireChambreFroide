import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlleeScreen from './screens/AlleeScreen';
import EntrepotScreen from './screens/EntrepotScreen';
import ListeArticleScreen from './screens/ListeArticleScreen';
import NiveauScreen from './screens/NiveauScreen';
import RayonScreen from './screens/RayonScreen';
import AcceuilScreen from './screens/AcceuilScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AcceuilScreen">
        <Stack.Screen name="AcceuilScreen" component={AcceuilScreen} />
        <Stack.Screen name="AlleeScreen" component={AlleeScreen} />
        <Stack.Screen name="EntrepotScreen" component={EntrepotScreen} />
        <Stack.Screen name="ListeArticleScreen" component={ListeArticleScreen} />
        <Stack.Screen name="NiveauScreen" component={NiveauScreen} />
        <Stack.Screen name="RayonScreen" component={RayonScreen} />
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
