import React from "react";
import { FlatList, View, Text } from "react-native";
import {
  InfoAndStatsCard,
  InfoAndStatsCardProps,
} from "../../Molecules/InfoAndStatsCard/InfoAndStatsCard";

interface InfoAndStatsTableProps {
  data: InfoAndStatsCardProps[];
}

export const InfoAndStatsTable: React.FC<InfoAndStatsTableProps> = ({
  data,
}) => (
  <View>
    <Text
      style={{
        marginBottom: 20,
        fontSize: 17,
        lineHeight: 21,
        fontWeight: "600",
      }}
    >
      Info & Stats
    </Text>
    <FlatList
      data={data}
      numColumns={2}
      style={{ columnGap: 25 }}
      keyExtractor={(item) => item.header}
      renderItem={({ item }) => (
        <View style={{ width: "50%", marginBottom: 18 }}>
          <InfoAndStatsCard info={item.info} header={item.header} />
        </View>
      )}
    />
  </View>
);
