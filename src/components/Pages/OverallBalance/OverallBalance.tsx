import React from "react";
import { Text, View } from "react-native";
import { CardHeader } from "../../Molecules/CardHeader/CardHeader";

export const OverallBalance = () => {
  return (
    <View>
      <Text>Overall ballance</Text>
      <CardHeader fund="solar" />
    </View>
  );
};
