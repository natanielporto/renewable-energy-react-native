import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
