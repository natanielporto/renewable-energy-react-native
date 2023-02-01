import React from "react";
import { Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../global/colors";

export interface PercentageProps {
  profit?: boolean;
  amount: number | string;
  currencyValue?: number | string;
}

export const Percentage: React.FC<PercentageProps> = ({
  profit,
  amount,
  currencyValue,
}) => {
  const styles = StyleSheet.create({
    text: {
      color: profit ? colors.secondary : colors.danger,
      fontSize: 14,
      lineHeight: 18,
      marginRight: 5,
    },
  });

  return (
    <Text>
      <Text>
        {profit ? (
          <Feather name="arrow-up-right" size={14} color={colors.secondary} />
        ) : (
          <Feather name="arrow-down-right" size={14} color={colors.danger} />
        )}
      </Text>
      <Text style={styles.text}>{amount}%</Text>

      {currencyValue && (
        <Text style={styles.text}>{` $(${currencyValue})`}</Text>
      )}
    </Text>
  );
};
