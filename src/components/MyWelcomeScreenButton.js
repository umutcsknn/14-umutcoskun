import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

const MyWelcomeScreenButton = ({ buttonText, onPress, arrow }) => {
  const dispatch = useDispatch();

  // Fetching necessary data from the Redux store using useSelector
  const someState = useSelector(state => state.someState); // Replace 'state.someState' with the correct path to your desired state

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
      {arrow && (
        <View style={styles.arrowContainer}>
          <AntDesign style={styles.arrow} name="right" size={24} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MyWelcomeScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
    alignSelf: 'center',
    backgroundColor: '#ce3c8c',
    padding: 10,
    width: '80%',
    height: '6.4%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold'
  },
  arrowContainer: {
    position: 'absolute',
    right: '10%', 
  },
  arrow: {
    color: 'white',
    fontSize: 20,
  },
})
