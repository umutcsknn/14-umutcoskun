import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yourActionCreator } from '../redux/actions'; // Import your action creator

const ModalButton = ({ text, isArrow, onPress }) => {
  const dispatch = useDispatch();
  const yourAction = () => dispatch(yourActionCreator());

  const [isFocused, setIsFocused] = useState(false);

  const handlePressIn = () => {
    setIsFocused(true);
  };

  const handlePressOut = () => {
    setIsFocused(false);
  };

  const handleButtonPress = () => {
    yourAction(); // Dispatch your action when the button is pressed
    if (onPress) {
      onPress(); // Trigger any additional function passed via props
    }
  };

  return (
    <TouchableOpacity
      onPress={handleButtonPress}
      activeOpacity={1}
      style={[
        styles.container,
        isFocused && styles.focusedContainer,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>{text}</Text>
      {isArrow && (
        <AntDesign style={styles.arrow} name="right" size={16} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginVertical: '1.3%',
    padding: '4%',
    backgroundColor: '#f6f7fb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  focusedContainer: {
    borderColor: '#e81f89',
    borderWidth: 2,
  },
  arrowContainer: {
    position: 'absolute',
    right: '10%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalButton;
