import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions'; // Import your action creator for setting search query

const MySearchBar = () => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (text) => {
    setWord(text);
    dispatch(setSearchQuery(text)); // Dispatch action to set search query in Redux store
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput
        onChangeText={handleSearch}
        value={word}
        placeholder="Search"
      />
    </View>
  );
}

export default MySearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 14,
    gap: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor:"#DCDBDB",
    backgroundColor: "#F5F6F8",
    borderRadius: 12,
    padding: 12,
    width: "90%",
  },
});
