import Color from "color";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Svg, { RadialGradient, Defs, Rect, Stop } from "react-native-svg";
import Animated, { FlipInYLeft, FlipInEasyY, Easing } from 'react-native-reanimated';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const MyAnimatedtouchable = Animated.createAnimatedComponent(TouchableOpacity);


const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "SFProDisplay-Bold",
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "SFProDisplay-Regular",
  },
});

interface SlideProps {
  slide: {
    color: string;
    title: string;
    description: string;
    picture: ReturnType<typeof require>;
  };
}

const Slide = ({
  slide: { picture, color, title, description },
}: SlideProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const lighterColor = Color(color).lighten(0.8).toString();
  const handelNavigation = ()=>{
    navigation.navigate("Main")
  }
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {title == "Video Tutorials" && <MyAnimatedtouchable entering={FlipInYLeft.duration(500).mass(4).randomDelay()} onPress={handelNavigation} style={{
          position: "absolute",
          width: 70,
          height: 70,
          backgroundColor: "red",
          top: 60,
          // padding: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          right: 160,
          borderWidth: 3,
          borderColor: "blue",
          zIndex:10,
          
        }}>
          <View style={{
            position: "absolute",
            borderWidth: 50,
            borderBottomColor: "transparent",
            borderLeftColor: "violet",
            left: "50%",
            borderTopColor: "transparent",
            borderRightColor: "transparent"
          }}></View>
          <Text style={{ color: "white" }}>start</Text>
        </MyAnimatedtouchable>}
      </View>
    </>
  );
};

export default Slide;
