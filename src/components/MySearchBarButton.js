import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from '../redux/actions'; // Import your action creator
import { Ionicons } from '@expo/vector-icons';

const MySearchBarButton = ({ searchBarTitle }) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    // Perform actions related to search if needed
    dispatch(searchAction()); // Dispatch your search action
  };

  return (
    <View style={styles.container} onTouchEnd={handleSearch}>
      <Ionicons name="search" size={24} color="black" />
      <Text>{searchBarTitle}</Text>
    </View>
  );
};

export default MySearchBarButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCDBDB',
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    padding: 12,
    width: '90%',
  },
});
