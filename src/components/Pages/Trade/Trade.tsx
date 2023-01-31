import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Chart } from "../../Atoms/Chart/Chart";
import { GraphBottomSelector } from "../../Atoms/GraphBottomSelector/GraphBottomSelector";
import { PageTitle } from "../../Atoms/PageTitle/PageTitle";
import { IndividualFundHeader } from "../../Molecules/IndividualFundHeader/IndividualFundHeader";

export const Trade = () => {
  const windowWidth = Dimensions.get("window");

  return (
    <View>
      <IndividualFundHeader
        amount={3.51}
        value={18.23}
        year={2022}
        currencyValue={1.21}
        profit
      />

      <Chart
        fund="wind"
        profit
        width={windowWidth.width}
        height={200}
        fineDetail
      />

      <GraphBottomSelector />
    </View>
  );
};
