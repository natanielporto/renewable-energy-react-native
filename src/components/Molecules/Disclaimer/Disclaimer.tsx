import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from "../../Atoms/CheckBox/CheckBox";

interface DisclaimerProps {
  children: string | JSX.Element | JSX.Element[];
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <CheckBox />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
