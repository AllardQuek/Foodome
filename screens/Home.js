import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { SIZES, COLORS, FONTS } from "../constants";
import categoryData from "../data/categories";
import shopData from "../data/shops";
import Category from "../components/Category";
import RestaurantListing from "../components/RestaurantListing";
import HomeHeader from "../components/HomeHeader";

const Home = ({ navigation }) => {
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

  const [categories, setCategories] = React.useState(categoryData);
  const [restaurants, setRestaurants] = React.useState(shopData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <Category
          shopData={shopData}
          item={item}
          restaurants={restaurants}
          setRestaurants={setRestaurants}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <RestaurantListing
        categories={categories}
        item={item}
        navigation={navigation}
        currentLocation={currentLocation}
      />
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader currentLocation={currentLocation} />
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Home;
