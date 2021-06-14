import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ContactsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink",
      }}
    >
      <Text>Contacts</Text>
      <AntDesign name="contacts" size={24} color="black" />
    </View>
  );
};

export default ContactsScreen;
