import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../global/colors";
import { Button } from "../../Atoms/Button/Button";
import { PageTitle } from "../../Atoms/PageTitle/PageTitle";
import { SimpleString } from "../../Atoms/SimpleString/SimpleString";
import { Disclaimer } from "../../Molecules/Disclaimer/Disclaimer";
import { SignUpInputFields } from "../../Organisms/SignUpInputFields/SignUpInputFields";

export const SignUp = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("overallBalance");
  }

  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        <View style={styles.title}>
          <PageTitle title="Create your account" />
        </View>

        <SignUpInputFields />

        <Disclaimer>
          <SimpleString>
            <Text
              style={{ marginLeft: 5, marginBottom: 32, color: colors.grey700 }}
            >
              I am over 18 years of age and I have read and agree to the&nbsp;
              <Text style={{ color: colors.black }}>Terms of Service</Text>{" "}
              and&nbsp;
              <Text style={{ color: colors.black }}>Privacy policy.</Text>
            </Text>
          </SimpleString>
        </Disclaimer>

        <Button action="Create account" onPress={openScreen} />

        <View style={styles.stringView}>
          <SimpleString justify="center">
            <Text style={styles.textA}>Already have an account?</Text>
            <Text style={styles.textB}>Log In Here</Text>
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
    marginTop: 19,
    display: "flex",
    justifyContent: "center",
  },
  textA: { marginRight: 5, color: colors.grey700 },
  textB: {
    textDecorationLine: "underline",
    marginRight: 5,
    color: colors.black,
  },
});
