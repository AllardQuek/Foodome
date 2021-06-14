import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <AppText>Foodome</AppText>
      <MaterialCommunityIcons
        style={{ color: "#F9881F" }}
        name="food-croissant"
        size={64}
        color="black"
      />
      {/* <AntDesign name="upcircleo" size={24} color="black" /> */}
    </View>
  );
};

export default HomeScreen;
