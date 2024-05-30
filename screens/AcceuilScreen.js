import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function AcceuilScreen({ navigation  }) {

  // navigation.setOptions({ headerTitle: 'Acceuil' });

  return (
    <View>
      <Button title="Synchroniser" onPress={() => navigation.navigate('EntrepotScreen')} />
      <Button title="Demarrer une tournée" onPress={() => navigation.navigate('EntrepotScreen')} />
      <Button title="Continuer la tournée" onPress={() => navigation.navigate('EntrepotScreen')} />
      <Button title="Generer le fichier" onPress={() => navigation.navigate('EntrepotScreen')} />
    </View>
  );
}


const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
}); 