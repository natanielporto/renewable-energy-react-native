import React from "react";
import { Text, View } from "react-native";
import { Chart } from "../../Atoms/Chart/Chart";

export const OverallBalance = () => {
  return (
    <View>
      <Text>Overall ballance</Text>
      <Chart fund="naturalGas" />
    </View>
  );
};
