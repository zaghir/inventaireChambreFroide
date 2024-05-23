import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ListeArticleSreen({ navigation , route }) {

  navigation.setOptions({ headerTitle: 'Liste Articles' });

  const { depot, allee, rayon , niveau } = route.params;

  return (
    <View >
      <Text>Vous etes sur </Text>
      <Text>{depot.label} - {allee.label} - {rayon.label} - {niveau.label}</Text>
      <Text>Ajouter les articles</Text>
      <Button title="Suivant" onPress={() => navigation.navigate('EntrepotScreen')} />
    </View>
  );
}