import React from "react";
import { View, Text, FlatList } from "react-native";
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
      <Text>Fund Breakdown</Text>
      <Text>Fake select</Text>

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
