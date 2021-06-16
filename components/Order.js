import React from "react";
import { View, Text, Image } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import MenuDots from "../components/MenuDots";
import OrderButton from "../components/OrderButton";

import { icons, COLORS, SIZES, FONTS } from "../constants";

const Order = ({
  navigation,
  orderItems,
  currentLocation,
  scrollX,
  restaurant,
}) => {
  const getBasketItemCount = () => {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  };

  const sumOrder = () => {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  };

  return (
    <View>
      <MenuDots scrollX={scrollX} restaurant={restaurant} />
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>
            {getBasketItemCount()} items in Cart
          </Text>
          <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              Location
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              Kovan
            </Text>
          </View>
        </View>

        <OrderButton
          navigation={navigation}
          restaurant={restaurant}
          currentLocation={currentLocation}
        />

        {isIphoneX() && (
          <View
            style={{
              position: "absolute",
              bottom: -34,
              left: 0,
              right: 0,
              height: 34,
              backgroundColor: COLORS.white,
            }}
          ></View>
        )}
      </View>
    </View>
  );
};

export default Order;
