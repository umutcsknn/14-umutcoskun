import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/actions'; // Import your action creator

const MyCard = ({ description, url }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.isFavorite); // Assuming state.isFavorite holds favorite status

  const handleFavIconPress = () => {
    dispatch(toggleFavorite()); // Dispatch action when the favorite icon is pressed
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={{ uri: url }} />
      <TouchableOpacity style={styles.favIcon} onPress={handleFavIconPress}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={23}
          color={isFavorite ? '#e81f89' : 'white'}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 'auto',
    marginVertical: 10,
    marginHorizontal: '2.5%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    padding: 10,
  },
  favIcon: {
    padding: 5,
    borderRadius: 50,
    position: "absolute",
    top: 1,
    right: 4
  },
  description: {
    fontSize: 14,
    color: '#333',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 5,
    fontWeight: 'bold'
  },
});

export default MyCard;
