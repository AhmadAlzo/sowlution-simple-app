import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LoadingDots from './react-native-loading-dots'
const SplahAnimationScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <View style={styles.dotsWrapper}>
        <LoadingDots />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loadingScreen: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    dotsWrapper: {
      width: 100,
    },
});

export default SplahAnimationScreen