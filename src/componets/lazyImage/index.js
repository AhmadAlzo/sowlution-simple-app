import React, { useState, useRef, useEffect } from 'react';
import { Image, Animated, Easing, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  placeholderWrapper: {
    ...StyleSheet.absoluteFill,
    zIndex: 2,
  },
  placeholder: {
    width: '100%',
    height: '100%',
  },
});

const LazyImage = ({ source, customPlaceholder, placeholderColor }) => {
  const [isLoading, setIsLoading] = useState(true);
  const opacityStartValue = useRef(new Animated.Value(0));

  const handleLoadedImage = () => {
    setIsLoading(false);
    opacityStartValue.current.stopAnimation();
  };

  const runAnimation = () => {
    Animated.loop(
      Animated.timing(opacityStartValue.current, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'relative',
        opacity: opacityStartValue.current.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 0.5, 1],
        }),
      }}
    >
      {isLoading && (
        <View style={styles.placeholderWrapper}>
          {customPlaceholder || (
            <View style={[styles.placeholder, { backgroundColor: placeholderColor || '#e3e3e3' }]} />
          )}
        </View>
      )}
      <Image
        source={typeof source === 'string' ? { uri: source } : source}
        onLoadEnd={handleLoadedImage}
      />
    </Animated.View>
  );
};

LazyImage.propTypes = {
  source: PropTypes.any,
  customPlaceholder: PropTypes.node,
  placeholderColor: PropTypes.string,
};

LazyImage.defaultProps = {
  customPlaceholder: null,
  placeholderColor: '#e3e3e3',
};

export default LazyImage;








///////usage/////////


// import LazyImage from 'animated-lazy-image';

//   /**
//    * Base example
//    */
//   <LazyImage
//     source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
//   />

//   /**
//    * With custom placeholder background color
//    */
//   <LazyImage
//     source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
//     placeholderColor="#f74b59"
//   />

//   /**
//    * With custom placeholder component
//    */
//   <LazyImage
//     source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
//     customPlaceholder={<CustomComponent />}
//   />