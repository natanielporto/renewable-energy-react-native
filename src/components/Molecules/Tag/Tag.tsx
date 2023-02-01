import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../../global/colors";

export const Tag = () => {
  return (
    <View style={styles.container}>
      <Octicons
        name="database"
        size={12}
        color={colors.purple}
        style={{ marginRight: 5 }}
      />
      <Text style={styles.text}>Earn Rewards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightPurple,
    paddingHorizontal: 8,
    paddingVertical: 9,
    maxWidth: 110,
    borderRadius: 4,
  },
  text: { color: colors.purple, fontSize: 11 },
});
