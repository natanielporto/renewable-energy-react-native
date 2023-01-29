import { Text, StyleSheet } from "react-native";
import { colors } from "../../../global/colors";

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 23,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.black,
  },
});
