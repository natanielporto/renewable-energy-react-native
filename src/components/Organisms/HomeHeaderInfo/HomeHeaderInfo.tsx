import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../global/colors";
import { Value } from "../../Atoms/Value/Value";
import {
  Percentage,
  PercentageProps,
} from "../../Molecules/Percentage/Percentage";
import { Tag } from "../../Molecules/Tag/Tag";

interface HomeHeaderInfoProps extends PercentageProps {
  value: string;
}

export const HomeHeaderInfo: React.FC<HomeHeaderInfoProps> = ({
  amount: percentage,
  value,
  profit,
}) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 12, marginBottom: 5, marginTop: 16 }}>
          Portfolio
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Value
              amount={value}
              style={{ fontSize: 24, lineHeight: 30, marginRight: 5 }}
            />
            <Percentage amount={percentage} profit={profit} />
          </View>

          <Tag />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: colors.grey100,
          borderBottomWidth: 1,
          paddingBottom: 30,
        }}
      />
    </>
  );
};
