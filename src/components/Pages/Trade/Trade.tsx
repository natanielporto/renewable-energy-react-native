import React from "react";
import { View, Dimensions } from "react-native";
import { InfoAndStats } from "../../../utils/fakeInfoAndStats";
import { Chart } from "../../Atoms/Chart/Chart";
import { GraphBottomSelector } from "../../Atoms/GraphBottomSelector/GraphBottomSelector";
import { IndividualFundHeader } from "../../Molecules/IndividualFundHeader/IndividualFundHeader";
import { InfoAndStatsTable } from "../../Organisms/InfoAndStatsTable/InfoAndStatsTable";

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

      <InfoAndStatsTable data={InfoAndStats} />
    </View>
  );
};
