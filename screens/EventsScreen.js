import React from "react";
import { Text, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const EventsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events</Text>
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

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      {/* matches navigation.navigate */}
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
