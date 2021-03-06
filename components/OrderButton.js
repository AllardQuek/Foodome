import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const OrderButton = ({ navigation }) => {
  return (
    <View
      style={{
        padding: SIZES.padding * 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: SIZES.width * 0.9,
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          borderRadius: SIZES.radius,
        }}
        onPress={() =>
          // * When user clicks order, navigate to Cart screen
          navigation.navigate("Cart")
        }
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderButton;
