import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function RayonSreen({ navigation, route }) {

  navigation.setOptions({ headerTitle: 'Rayon' });

  const { depot, allee } = route.params;

  const [value, setValue] = useState(null);

  const data = [
    { label: 'rayon 1', value: 'id1' },
    { label: 'rayon 2', value: 'id2' },
    { label: 'rayon 3', value: 'id3' },
    { label: 'rayon 4', value: 'id4' },
    { label: 'rayon 5', value: 'id5' },
    { label: 'rayon 6', value: 'id6' },
    { label: 'rayon 7', value: 'id7' },
    { label: 'rayon 8', value: 'id8' },
  ];
  
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (

    <View >
      <Text>Vous etes sur </Text>
      <Text>{depot.label} - {allee.label} </Text>

      <Text>Selectionner le rayon</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selectionner une rayon"
        searchPlaceholder="Recherche..."
        value={value}
        onChange={item => {
          setValue({ code: item.value, label: item.label });
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
      <Button title="Suivant" onPress={() => navigation.navigate('NiveauScreen', { depot, allee, rayon: value })} />

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