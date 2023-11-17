import React, { useEffect } from 'react';
import { View, Dimensions, StyleSheet, Platform, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoppingCarousel } from '../redux/actions'; // Import your action creator

const { width: screenWidth } = Dimensions.get('window');

const MyShoppingCarousel = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.carousel.images); // Retrieve shopping carousel images from Redux store

  useEffect(() => {
    dispatch(fetchShoppingCarousel()); // Dispatch action to fetch shopping carousel images
  }, [dispatch]);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={images}
        renderItem={renderItem}
        hasParallaxImages={true}
        firstItem={2}
        autoplay={true}
        autoplayInterval={4000}
        loop={true}
      />
    </View>
  );
};

export default MyShoppingCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    backgroundColor: '#ffffff',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 160,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
