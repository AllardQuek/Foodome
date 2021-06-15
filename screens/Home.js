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

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import categoryData from "../data/categories";
import shopData from "../data/shops";
import Category from "../components/Category";
import Restaurant from "../components/Restaurant";

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

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return <Category item={item} />;
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
      <Restaurant
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
      {renderHeader()}
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
