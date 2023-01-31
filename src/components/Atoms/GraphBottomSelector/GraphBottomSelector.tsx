import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";

export const GraphBottomSelector = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>1d</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 8,
    backgroundColor: colors.lightPurple,
    borderRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 19,
  },
});
