import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import { Button } from "../../Atoms/Button/Button";
import { PageTitle } from "../../Atoms/PageTitle/PageTitle";
import { SimpleString } from "../../Atoms/SimpleString/SimpleString";
import { LoginInputFields } from "../../Organisms/LoginInputFields/LoginInputFields";

export const Login = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("signUp");
  }

  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        <View style={styles.title}>
          <PageTitle title="Login" />
        </View>

        <LoginInputFields />

        <Button action="Login" onPress={openScreen} />

        <View style={styles.stringView}>
          <SimpleString justify="center">
            <Text style={styles.textA}>
              Don't have an account?&nbsp;
              <Text style={styles.textB}>Sign up</Text>&nbsp;here
            </Text>
          </SimpleString>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
  },
  componentContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 34,
  },
  stringView: {
    marginTop: 13,
    display: "flex",
    justifyContent: "center",
  },
  textA: { marginRight: 5, color: colors.grey700 },
  textB: {
    textDecorationLine: "underline",
    marginRight: 5,
    color: colors.grey700,
  },
});
