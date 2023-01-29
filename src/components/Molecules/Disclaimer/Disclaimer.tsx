import React from "react";
import { View } from "react-native";
import { CheckBox } from "../../Atoms/CheckBox/CheckBox";

interface DisclaimerProps {
  children: string | JSX.Element | JSX.Element[];
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <CheckBox />
      {children}
    </View>
  );
};
