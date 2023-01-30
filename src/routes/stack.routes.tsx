import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../components/Pages/Login/Login";
import { SignUp } from "../components/Pages/SignUp/SignUp";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { colors } from "../global/colors";
import { TabRoutes } from "./tab.routes";

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
      <Screen
        name="home"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
        // options={{
        //   title: `Account: $${0}`,
        //   headerLeft: () => (
        //     <View
        //       style={{
        //         width: 32,
        //         height: 32,
        //         backgroundColor: colors.grey100,
        //         borderRadius: 50,
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //       }}
        //     >
        //       <AntDesign name="user" size={24} color="black" />
        //     </View>
        //   ),
        //   headerRight: () => <AntDesign name="bells" size={24} color="black" />,
        // }}
      />
    </Navigator>
  );
}
