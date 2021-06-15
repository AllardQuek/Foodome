import React from "react";
import { Text, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import shops from "../data/shops";

const Products = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      {shops.map((shop, index) => {
        return <Text key={index}>{shop.name}</Text>;
      })}
      <Text>Products</Text>
      <MaterialIcons name="event-available" size={24} color="black" />
      <Button
        title="You've won 1 MILLION dollars!"
        onPress={() => {
          navigation.navigate("EventsSecondScreen");
        }}
      ></Button>
    </View>
  );
};

const EventsSecondScreen = () => {
  return <Text>Don't get scammed!</Text>;
};

const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={Products} />
      {/* matches navigation.navigate */}
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
