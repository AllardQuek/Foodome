import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import {
  Restaurant,
  OrderDelivery,
  StartUp,
  Cart,
  GroupOrders,
} from "./screens";
import Tabs from "./navigation/tabs";
import SplashScreen from "./screens/SplashScreen";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="GroupOrders" component={GroupOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
