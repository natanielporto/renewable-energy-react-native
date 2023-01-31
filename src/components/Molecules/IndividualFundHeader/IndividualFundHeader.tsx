import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Value } from "../../Atoms/Value/Value";
import { Percentage, PercentageProps } from "../Percentage/Percentage";

interface IndividualFundHeaderProps extends PercentageProps {
  value: string | number;
  year: string | number;
}

export const IndividualFundHeader: React.FC<IndividualFundHeaderProps> = ({
  amount,
  value,
  year,
  currencyValue,
  profit,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Value amount={value} style={styles.text} />
        <Percentage
          amount={amount}
          currencyValue={currencyValue}
          profit={profit}
        />
      </View>
      <Text style={styles.text}>{year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: { fontSize: 24, lineHeight: 30, marginBottom: 4 },
});
