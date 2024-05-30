import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AlleeScreen from './screens/AlleeScreen';
import EntrepotScreen from './screens/EntrepotScreen';
import ListeArticleScreen from './screens/ListeArticleScreen';
import NiveauScreen from './screens/NiveauScreen';
import RayonScreen from './screens/RayonScreen';
import AcceuilScreen from './screens/AcceuilScreen';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="AcceuillScreen"
        component={AcceuilScreen}
        options={{
          title: 'Acceuil',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AcceuilScreen">
         <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen name="AcceuilScreen" component={AcceuilScreen}  options={{ drawerLabel: 'Acceil' }}/>
        <Stack.Screen name="AlleeScreen" component={AlleeScreen} options={{ drawerLabel: 'Allee' }}/>
        <Stack.Screen name="EntrepotScreen" component={EntrepotScreen} options={{ drawerLabel: 'Entrepot' }} />
        <Stack.Screen name="ListeArticleScreen" component={ListeArticleScreen} options={{ drawerLabel: 'Liste Article' }}/>
        <Stack.Screen name="NiveauScreen" component={NiveauScreen} options={{ drawerLabel: 'Niveau' }}/>
        <Stack.Screen name="RayonScreen" component={RayonScreen} options={{ drawerLabel: 'Rayon' }}/>
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
