import React from "react";
import { SafeAreaView } from "react-native";
import groupOrders from "../data/groupOrders";
import { FlatList } from "react-native-gesture-handler";
import GroupOrder from "../components/GroupOrder";
import { SIZES } from "../constants";
import HomeHeader from "../components/HomeHeader";

const GroupOrders = () => {
  const renderItem = ({ item }) => <GroupOrder item={item} />;

  const initialCurrentLocation = {
    streetName: "Foodome",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  return (
    <SafeAreaView>
      <HomeHeader currentLocation={currentLocation} navigation={null} />
      <FlatList
        data={groupOrders}
        keyExtractor={(item) => `${item.key}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingTop: 50,
        }}
      />
    </SafeAreaView>
  );
};

export default GroupOrders;
