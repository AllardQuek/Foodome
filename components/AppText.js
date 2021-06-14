import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const AppText = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir",
    fontSize: "3rem",
  },
});

export default AppText;
