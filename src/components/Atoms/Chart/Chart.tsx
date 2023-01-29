import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { VictoryArea } from "victory-native";
import { colors } from "../../../global/colors";
import { INTERESTS } from "../../../utils/interests";

interface ChartProps {
  fund: "wind" | "solar" | "naturalGas";
  profit?: boolean;
}

export const Chart: React.FC<ChartProps> = ({ fund, profit }) => {
  return (
    <View>
      <VictoryArea
        interpolation="natural"
        data={INTERESTS[fund]}
        style={{
          data: {
            fill: "transparent",
            fillOpacity: 0.7,
            stroke: profit ? colors.secondary : colors.danger,
            strokeWidth: 3,
          },
        }}
      />
    </View>
  );
};
