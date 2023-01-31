import React from "react";
import { View, Image, Text } from "react-native";
import { colors } from "../../../global/colors";

export interface FundBreakdownCardProps {
  src: string;
  alt: string;
  companyLogo: string;
  text: string;
}

export const FundBreakdownCard: React.FC<FundBreakdownCardProps> = ({
  alt,
  companyLogo,
  src,
  text,
}) => {
  return (
    <View
      style={{
        width: 220,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.grey300,
        marginRight: 15,
      }}
    >
      <Image
        alt={alt}
        style={{
          width: 220,
          height: 106,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
        source={{ uri: src }}
      />
      <View
        style={{
          marginTop: 15,
          paddingLeft: 13,
          paddingRight: 7,
          paddingBottom: 23,
        }}
      >
        <Text style={{ marginBottom: 10.5 }}>{companyLogo}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 80,
          }}
        >
          <Text style={{ fontSize: 12 }}>{text}</Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            Read more
          </Text>
        </View>
      </View>
    </View>
  );
};
