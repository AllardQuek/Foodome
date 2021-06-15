import React from "react";
import { Animated, SafeAreaView, StyleSheet } from "react-native";
import AnimatedLottieView from "lottie-react-native";

export default function SplashScreen({ navigation }) {
  this.animated = new Animated.Value(0);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const opacity = this.animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  fadeIn();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text
        style={[
          styles.text,
          { opacity: opacity },
          // {
          //     // Bind opacity to animated value
          //     opacity: fadeAnim
          // }
          { backgroundColor: "transparent" },
        ]}
      >
        Foodome
      </Animated.Text>
      <AnimatedLottieView
        source={require("../assets/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.replace("StartUp");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    position: "absolute",
    fontSize: 40,
    top: 175,
    fontWeight: "bold",
  },
});
