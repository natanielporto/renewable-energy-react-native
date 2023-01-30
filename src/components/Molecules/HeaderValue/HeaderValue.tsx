import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface HeaderValueProps {
  value?: string;
}

export const HeaderValue: React.FC<HeaderValueProps> = ({ value }) => {
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Text>Account: ${value || "0"}</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </View>
  );
};
