import React from "react";
import { View } from "react-native";
import { VictoryArea } from "victory-native";
import { colors } from "../../../global/colors";
import { INTERESTS } from "../../../utils/interests";

interface ChartProps {
  fund: "wind" | "solar" | "naturalGas";
  profit?: boolean;
  height?: number;
  width?: number;
  fineDetail: boolean;
}

export const Chart: React.FC<ChartProps> = ({
  fund,
  profit,
  width,
  height,
  fineDetail = false,
}) => {
  return (
    <View>
      <VictoryArea
        height={height || 48}
        width={width || 60}
        interpolation={fineDetail ? "linear" : "natural"}
        data={INTERESTS[fund]}
        labels={fineDetail ? ({ datum }) => datum.y : undefined}
        padding={0}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
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
