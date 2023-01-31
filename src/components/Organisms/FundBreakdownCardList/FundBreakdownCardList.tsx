import React from "react";
import { View, Text, FlatList } from "react-native";
import { FundBreakdownSections } from "../../Molecules/FundBreakdownSections/FundBreakdownSections";
import {
  FundBreakdownCard,
  FundBreakdownCardProps,
} from "../FundBreakdownCard/FundBreakdownCard";

interface FundBreakdowncardListProps {
  data: FundBreakdownCardProps[];
}

export const FundBreakdownCardList: React.FC<FundBreakdowncardListProps> = ({
  data,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 17,
          lineHeight: 21,
          fontWeight: "600",
          marginBottom: 19,
        }}
      >
        Fund Breakdown
      </Text>

      <FundBreakdownSections />

      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.companyLogo}
        renderItem={({ item }) => <FundBreakdownCard {...item} />}
        horizontal
      />
    </View>
  );
};
