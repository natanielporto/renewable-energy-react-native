import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";
import { Value } from "../../Atoms/Value/Value";
import { Percentage, PercentageProps } from "../Percentage/Percentage";

interface IndividualFundDataProps extends PercentageProps {
  topLeftValue: string | number;
  topRightValue: string | number;
  lastPurchase?: string;
}

export const IndividualFundData: React.FC<IndividualFundDataProps> = ({
  amount,
  topLeftValue,
  topRightValue,
  currencyValue,
  profit,
  lastPurchase,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Value amount={topLeftValue} style={styles.text} />
        <Text style={styles.text}>{topRightValue}</Text>
      </View>
      <View style={styles.insideContainer}>
        <Percentage
          amount={amount}
          currencyValue={currencyValue}
          profit={profit}
        />
        <Text style={styles.textGrey}>{lastPurchase}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  insideContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  text: { fontSize: 24, lineHeight: 30 },
  textGrey: {
    fontSize: 14,
    color: colors.grey700,
  },
});
