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
    <View style={{ width: 60, height: 48 }}>
      <VictoryArea
        height={48}
        width={60}
        interpolation="natural"
        data={INTERESTS[fund]}
        style={{
          data: {
            fill: "transparent",
            stroke: profit ? colors.secondary : colors.danger,
          },
        }}
      />
    </View>
  );
};
