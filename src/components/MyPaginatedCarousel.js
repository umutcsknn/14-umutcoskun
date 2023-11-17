import React, { useRef, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers } from '../redux/actions'; // Import your action creator

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const images = useSelector(state => state.carousel.images); // Assuming state.carousel.images holds carousel images

  useEffect(() => {
    dispatch(fetchOffers()); // Dispatch action to fetch carousel images
  }, [dispatch]);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
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
        ref={carouselRef}
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 50
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 160,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});

export default MyCarousel;
