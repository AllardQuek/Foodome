import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>Home!</Text>
      <AntDesign name="upcircleo" size={24} color="black" />
    </View>
  );
};

export default HomeScreen;
