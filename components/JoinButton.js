import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const JoinButton = ({}) => {
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          width: SIZES.width * 0.4,
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          borderRadius: SIZES.radius,
        }}
        onPress={
          () => {}
          // navigation.navigate("Cart")
        }
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Join Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinButton;
