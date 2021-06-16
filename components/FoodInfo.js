import React from "react";
import { Animated } from "react-native";
import MenuItem from "./MenuItem";

const FoodInfo = ({ scrollX, restaurant, orderItems, setOrderItems }) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {restaurant?.menu.map((item, index) => (
        <MenuItem
          item={item}
          key={index}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default FoodInfo;
