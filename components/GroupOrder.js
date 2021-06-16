import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import JoinButton from "./JoinButton";

import { icons, SIZES, COLORS, FONTS } from "../constants";

const GroupOrder = ({ item }) => {
  const groupSize = item.numInGroup;
  const numNeeded = 3 - groupSize;

  return (
    <TouchableOpacity
      style={{ marginBottom: SIZES.padding * 2 }}
      onPress={() =>
        // * Here is how we navigate to the next screen
        navigation.navigate("Restaurant", {
          item,
          currentLocation,
        })
      }
    >
      {/* Image */}
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderRadius: SIZES.radius,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 50,
            width: SIZES.width * 0.3,
            backgroundColor: COLORS.white,
            borderTopRightRadius: SIZES.radius,
            borderBottomLeftRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
        </View>
      </View>

      {/* GroupOrder Info */}
      <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
      <Text style={{ ...FONTS.body4 }}>Group location: {item.location}</Text>
      <Text style={{ ...FONTS.body3, marginTop: 15, marginBottom: 10 }}>
        {item.numInGroup} {groupSize > 1 ? "people are" : "person is"} in this
        group. They need {numNeeded} more{" "}
        {numNeeded > 1 ? "neighbours" : "neighbour"} neighbour to complete this
        order!
      </Text>

      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "center"
        }}
      >
        {/* 5-stars Rating */}
        {[0, 1, 2, 3, 4].map((item, index) => {
          return (
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />
          );
        })}
        <JoinButton />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  joinbutton: {
    color: "#000",
    backgroundColor: "blue",
  },
});

export default GroupOrder;
