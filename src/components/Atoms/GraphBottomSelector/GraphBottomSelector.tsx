import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as S from "./styles";

interface GraphBottomSelectorProps {
  selector: string;
  btnSelected: boolean;
}

export const GraphBottomSelector: React.FC<GraphBottomSelectorProps> = ({
  selector,
  btnSelected,
}) => {
  console.log(
    "🚀 ~ file: GraphBottomSelector.tsx:14 ~ btnSelected",
    btnSelected
  );
  console.log("🚀 ~ file: GraphBottomSelector.tsx:14 ~ selector", selector);
  return (
    <TouchableOpacity>
      <S.Container btnSelected={btnSelected}>
        <S.Text>{selector}</S.Text>
      </S.Container>
    </TouchableOpacity>
  );
};
