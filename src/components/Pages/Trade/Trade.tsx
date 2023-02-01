import { Feather } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../global/colors";
import { fakeCardList } from "../../../utils/fakeBreakdownCardList";
import { InfoAndStats } from "../../../utils/fakeInfoAndStats";
import { Button } from "../../Atoms/Button/Button";
import { Chart } from "../../Atoms/Chart/Chart";
import { GraphBottomSelector } from "../../Atoms/GraphBottomSelector/GraphBottomSelector";
import { IndividualFundData } from "../../Molecules/IndividualFundData/IndividualFundData";
import { FundBreakdownCardList } from "../../Organisms/FundBreakdownCardList/FundBreakdownCardList";
import { InfoAndStatsTable } from "../../Organisms/InfoAndStatsTable/InfoAndStatsTable";

export const Trade = () => {
  const [selected, setSelected] = useState<string>("1d");

  const windowWidth = Dimensions.get("window");

  const graphButtons = ["1h", "1d", "1w", "1m", "1y", "All"];

  const handleSelect = (item: string) => setSelected(item);

  const renderGraphButtons = useMemo(
    () =>
      graphButtons.map((button, index) => (
        <TouchableOpacity onPress={() => handleSelect(button)}>
          <GraphBottomSelector
            selector={button}
            btnSelected={graphButtons[index] === selected}
          />
        </TouchableOpacity>
      )),
    [selected]
  );

  return (
    <View style={{ position: "relative" }}>
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 20,
          }}
        >
          <View style={{ marginBottom: 44 }}>
            <IndividualFundData
              amount={3.51}
              topLeftValue={18.23}
              topRightValue={2022}
              currencyValue={1.21}
              profit
            />
          </View>

          <Chart
            fund="wind"
            profit
            width={windowWidth.width}
            height={200}
            fineDetail
          />

          <ScrollView
            horizontal
            contentContainerStyle={{
              width: "100%",
              justifyContent: "space-around",
              marginBottom: 40,
            }}
          >
            {renderGraphButtons}
          </ScrollView>

          <InfoAndStatsTable data={InfoAndStats} />

          <View style={{ marginTop: 49, marginBottom: 63.5 }}>
            <FundBreakdownCardList data={fakeCardList} />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <Feather name="pie-chart" size={17} />
            <Text
              style={{
                fontSize: 17,
                marginLeft: 5,
                lineHeight: 21,
                fontWeight: "600",
              }}
            >
              Your Portfolio
            </Text>
          </View>

          <IndividualFundData
            amount={8.41}
            topLeftValue="18 credits"
            topRightValue="$328.14"
            lastPurchase="Last purchase 28d ago"
            profit
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: 18,
              marginBottom: 15,
            }}
          >
            <View style={{ flex: 0.5, marginRight: 10 }}>
              <Button action="Sell" bordered />
            </View>
            <View style={{ flex: 0.5 }}>
              <Button action="Retire credits" background="secondary" />
            </View>
          </View>

          <Text
            style={{ fontSize: 11, color: colors.grey700, marginBottom: 40 }}
          >
            You’ve previously retired 28 credits of this asset
          </Text>

          <View
            style={{
              padding: 10,
              borderRadius: 4,
              backgroundColor: colors.grey100,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 12, color: colors.grey700 }}>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order. {"\n"}
              {"\n"}The information provided is not investment advice, and
              should not be used as a recommendation to buy or sell assets.
            </Text>
          </View>

          <View>
            <Button action="Buy" background="primary" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
