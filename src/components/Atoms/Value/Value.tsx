import { Text, StyleSheet } from "react-native";

interface ValueProps {
  amount: string | number;
  style?: React.CSSProperties;
}

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
