import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../components/Pages/Login/Login";
import { SignUp } from "../components/Pages/SignUp/SignUp";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator>
      <Screen
        name="login"
        component={Login}
        options={{
          title: "",
        }}
      />
      <Screen
        name="signUp"
        component={SignUp}
        options={{
          title: "",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={18}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Navigator>
  );
}
