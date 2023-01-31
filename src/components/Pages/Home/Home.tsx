import React from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
} from "react-native";
import { colors } from "../../../global/colors";
import { Banner } from "../../Molecules/Banner/Banner";
import { BlankCard } from "../../Molecules/BlankCard/BlankCard";
import { CardHeaderProps } from "../../Molecules/CardHeader/CardHeader";
import { FundCard } from "../../Organisms/FundCard/FundCard";
import { HomeHeaderInfo } from "../../Organisms/HomeHeader/HomeHeader";

interface InterestValueProps extends CardHeaderProps {
  value: number;
  percentage: number;
  profit?: boolean;
}
const data: InterestValueProps[] = [
  { fund: "wind", percentage: 3.51, value: 1032.23, profit: true },
  { fund: "solar", percentage: 0.13, value: 986.61 },
  { fund: "naturalGas", percentage: 14, value: 1122, profit: true },
];

export const Home = () => {
  const renderCategoryItem = (
    itemData: ListRenderItemInfo<InterestValueProps>
  ) => {
    const { fund, percentage, value, profit } = itemData.item;
    return (
      <FundCard
        fund={fund}
        percentage={percentage}
        value={value}
        profit={profit}
      />
    );
  };

  return (
    <View style={{ backgroundColor: colors.greyBackground100, height: "100%" }}>
      <HomeHeaderInfo value="1,245.21" amount="31.82%" profit />
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 18,
            lineHeight: 23,
            fontWeight: "600",
          }}
        >
          Funds
        </Text>
        <FlatList
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={(card) => card.fund}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Banner />
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <BlankCard title="Why should you invest here?" />
          <BlankCard title="" />
        </ScrollView>
      </View>
    </View>
  );
};
