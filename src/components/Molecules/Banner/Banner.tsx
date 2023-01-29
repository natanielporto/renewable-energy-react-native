import React from "react";
import { Image, Text, View } from "react-native";
import * as S from "./styles";

export const Banner = () => {
  return (
    <S.Container>
      <View>
        <S.TopText>Learn more about carbon credits</S.TopText>
        <S.BottomText>Check out our top tips!</S.BottomText>
      </View>
      <Image source={require("../../../assets/BusinessStatistics.png")} />
    </S.Container>
  );
};
