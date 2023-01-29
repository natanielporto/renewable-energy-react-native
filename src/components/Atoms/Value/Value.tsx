import { Text, StyleSheet } from "react-native";

export const Value = ({ amount }) => {
  return <Text style={styles.text}>${amount}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 18,
  },
});
