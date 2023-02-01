import { Text, StyleSheet } from "react-native";

export const Value = ({ amount, style = {} }) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      lineHeight: 18,
      ...style,
    },
  });

  return <Text style={styles.text}>${amount}</Text>;
};
