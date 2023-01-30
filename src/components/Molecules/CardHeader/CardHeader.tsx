import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";

export interface CardHeaderProps {
  fund: "wind" | "solar" | "naturalGas";
}

export const CardHeader: React.FC<CardHeaderProps> = ({ fund }) => {
  const type = {
    solar: {
      icon: <Feather name="sun" size={13} color={colors.yellow} />,
      title: "Solar fund",
    },
    wind: {
      icon: (
        <MaterialCommunityIcons
          name="weather-windy"
          size={13}
          color={colors.blue}
        />
      ),
      title: "Wind fund",
    },
    naturalGas: {
      icon: <Ionicons name="leaf-outline" size={13} color={colors.secondary} />,
      title: "Natural gas fund",
    },
  };
  return (
    <View>
      {type[fund].icon}
      <Text style={styles.text}>{type[fund].title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    color: colors.black,
    marginTop: 6.5,
    marginBottom: 14,
  },
});
