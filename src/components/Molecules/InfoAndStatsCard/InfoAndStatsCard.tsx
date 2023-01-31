import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../global/colors";

export interface InfoAndStatsCardProps {
  header: string;
  info: string;
}

export const InfoAndStatsCard: React.FC<InfoAndStatsCardProps> = ({
  header,
  info,
}) => {
  return (
    <View>
      <Text style={{ color: colors.grey700, marginBottom: 10 }}>
        {header} <Ionicons name="information-circle-outline" size={14} />
      </Text>
      <Text>{info}</Text>
    </View>
  );
};
