import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons, COLORS, SIZES, FONTS } from "../constants";

const MenuItem = ({ item, index, orderItems, setOrderItems }) => {
  const editOrder = (action, menuId, price) => {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  };

  const getOrderQty = (menuId) => {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  };

  return (
    <View key={`menu-${index}`} style={{ alignItems: "center" }}>
      <View style={{ height: SIZES.height * 0.35 }}>
        {/* Food Image */}
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{
            width: SIZES.width,
            height: "100%",
          }}
        />

        {/* Quantity */}
        <View
          style={{
            position: "absolute",
            bottom: -20,
            width: SIZES.width,
            height: 50,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
            }}
            onPress={() => editOrder("-", item.menuId, item.price)}
          >
            <Text style={{ ...FONTS.body1 }}>-</Text>
          </TouchableOpacity>

          <View
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
          </View>

          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
            }}
            onPress={() => editOrder("+", item.menuId, item.price)}
          >
            <Text style={{ ...FONTS.body1 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Name & Description */}
      <View
        style={{
          width: SIZES.width,
          alignItems: "center",
          marginTop: 15,
          paddingHorizontal: SIZES.padding * 2,
        }}
      >
        <Text style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}>
          {item.name} - {item.price.toFixed(2)}
        </Text>
        <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
      </View>

      {/* Calories */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Image
          source={icons.fire}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />

        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.darygray,
          }}
        >
          {item.calories.toFixed(2)} cal
        </Text>
      </View>
    </View>
  );
};

export default MenuItem;
