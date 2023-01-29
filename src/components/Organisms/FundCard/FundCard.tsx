import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";
import { Chart } from "../../Atoms/Chart/Chart";
import { Value } from "../../Atoms/Value/Value";
import { CardHeader } from "../../Molecules/CardHeader/CardHeader";
import { Percentage } from "../../Molecules/Percentage/Percentage";

export const FundCard = () => {
  return (
    <View style={styles.container}>
      <CardHeader fund="wind" />
      <Chart fund="wind" profit />
      <View style={styles.footer}>
        <Value amount={1032.23} />
        <Percentage amount={3.51} profit />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray300,
    padding: 12,
    marginRight: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
});
