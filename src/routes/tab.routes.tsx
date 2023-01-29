import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../components/Pages/Login/Login";
import { SignUp } from "../components/Pages/SignUp/SignUp";
import { useNavigation } from "@react-navigation/native";
import { OverallBalance } from "../components/Pages/OverallBalance/OverallBalance";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.black,
      }}
    >
      <Screen
        name="home"
        component={Login}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="trade"
        component={SignUp}
        options={{
          tabBarLabel: "Trade",
          tabBarIcon: ({ color }) => (
            <Octicons name="arrow-switch" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="portfolio"
        component={OverallBalance}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
