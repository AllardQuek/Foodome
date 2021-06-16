import React from "react";
import { StyleSheet, SafeAreaView, Animated } from "react-native";
import RestaurantHeader from "../components/RestaurantHeader";
import Order from "../components/Order";
import FoodInfo from "../components/FoodInfo";

import { COLORS } from "../constants";

const Restaurant = ({ route, navigation }) => {

  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);
  const [orderList, setOrderList] = React.useState([]);

  React.useEffect(() => {
    let { item, currentLocation, orderlist } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
    setOrderList(orderlist)
  });

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader navigation={navigation} restaurant={restaurant} />
      <FoodInfo
        scrollX={scrollX}
        restaurant={restaurant}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />
      <Order
        navigation={navigation}
        orderItems={orderItems}
        currentLocation={currentLocation}
        scrollX={scrollX}
        restaurant={restaurant}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Restaurant;
