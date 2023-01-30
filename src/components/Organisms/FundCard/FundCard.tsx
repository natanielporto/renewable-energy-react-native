import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";
import { Chart } from "../../Atoms/Chart/Chart";
import { Value } from "../../Atoms/Value/Value";
import { CardHeader } from "../../Molecules/CardHeader/CardHeader";
import { Percentage } from "../../Molecules/Percentage/Percentage";

interface FundCardProps {
  profit?: boolean;
  fund: "wind" | "solar" | "naturalGas";
  value: number;
  percentage: number;
}

export const FundCard: React.FC<FundCardProps> = ({
  fund,
  profit,
  value,
  percentage,
}) => {
  return (
    <View style={styles.container}>
      <CardHeader fund={fund} />
      <Chart fund={fund} profit={profit} />
      <View style={styles.footer}>
        <Value amount={value} />
        <Percentage amount={percentage} profit={profit} />
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
    borderColor: colors.grey300,
    padding: 12,
    marginRight: 15,
    maxHeight: 155,
    width: 150,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
});
