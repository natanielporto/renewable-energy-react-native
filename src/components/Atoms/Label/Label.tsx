import { Text, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";

interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return <Text style={styles.text}>{label}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    lineHeight: 14,
    color: colors.grey700,
    marginBottom: 5,
  },
});
