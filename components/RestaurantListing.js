import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { icons, SIZES, COLORS, FONTS } from "../constants";

const Restaurant = ({ categories, item, navigation, currentLocation, orderlist }) => {
  // Dummy Datas
  const getCategoryNameById = (id) => {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  };

  orderlist = [];

  return (
    <TouchableOpacity
      style={{ marginBottom: SIZES.padding * 2 }}
      onPress={() =>
        navigation.navigate("Restaurant", {
          item,
          currentLocation,
          orderlist,
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

      {/* RestaurantListing Info */}
      <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
        }}
      >
        {/* Rating */}
        <Image
          source={icons.star}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.primary,
            marginRight: 10,
          }}
        />
        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        >
          {item.categories.map((categoryId) => {
            return (
              <View style={{ flexDirection: "row" }} key={categoryId}>
                <Text style={{ ...FONTS.body3 }}>
                  {getCategoryNameById(categoryId)}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
              </View>
            );
          })}

          {/* Price */}
          {[1, 2, 3].map((priceRating) => (
            <Text
              key={priceRating}
              style={{
                ...FONTS.body3,
                color:
                  priceRating <= item.priceRating
                    ? COLORS.black
                    : COLORS.darkgray,
              }}
            >
              $
            </Text>
          ))}
        </View>
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
});

export default RestaurantListing;
