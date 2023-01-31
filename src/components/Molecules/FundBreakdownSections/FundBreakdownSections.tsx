import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../global/colors";

export const FundBreakdownSections = () => {
  const titles = ["Highlighted", "Value", "Vintage", "Registry"];

  const [selected, setSelected] = useState<string>("Highlighted");

  const renderTitles = useMemo(
    () =>
      titles.map((item) => {
        const hasBorder = item === selected;

        return (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            key={item}
            id={item}
            style={{
              borderBottomWidth: hasBorder && 2,
              borderBottomColor: colors.primary,
              borderStyle: "solid",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 18,
                fontWeight: "600",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }),
    [titles]
  );

  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          width: "100%",
          height: 25,
          marginBottom: 18,
        }}
      >
        {renderTitles}
      </ScrollView>
    </View>
  );
};
