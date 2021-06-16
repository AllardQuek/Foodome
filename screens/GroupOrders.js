import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import groupOrders from "../data/groupOrders";
import { FlatList } from "react-native-gesture-handler";
import GroupOrder from "../components/GroupOrder";
import { SIZES } from "../constants";

const GroupOrders = () => {
  const renderItem = ({ item }) => <GroupOrder item={item} />;

  return (
    <FlatList
      data={groupOrders}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingTop: 50,
      }}
    />
  );
};

export default GroupOrders;
