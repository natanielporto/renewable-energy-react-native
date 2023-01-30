import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../components/Pages/Home/Home";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { Trade } from "../components/Pages/Trade/Trade";
import { Portfolio } from "../components/Pages/Portfolio/Portfolio";
import { View } from "react-native";
import { HeaderValue } from "../components/Molecules/HeaderValue/HeaderValue";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.black,
      }}
    >
      <Screen
        name="homepage"
        component={Home}
        options={{
          title: `Account: $${0}`,
          headerLeft: () => (
            <View
              style={{
                width: 32,
                height: 32,
                marginLeft: 20,
                backgroundColor: colors.grey100,
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="user" size={24} color="black" />
            </View>
          ),
          headerRight: () => (
            <AntDesign
              name="bells"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
          ),
          headerTitle: () => <HeaderValue value="1.457,23" />,
          headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="trade"
        component={Trade}
        options={{
          title: "",
          tabBarLabel: "Trade",
          tabBarIcon: ({ color }) => (
            <Octicons name="arrow-switch" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="portfolio"
        component={Portfolio}
        options={{
          title: "",
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
