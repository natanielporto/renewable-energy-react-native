import React from "react";
import * as S from "./styles";

export const BlankCard = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
