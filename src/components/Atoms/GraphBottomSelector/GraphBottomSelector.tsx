import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

interface GraphBottomSelectorProps {
  selector: string;
  btnSelected: boolean;
}

export const GraphBottomSelector: React.FC<GraphBottomSelectorProps> = ({
  selector,
  btnSelected,
}) => {
  return (
    <TouchableOpacity>
      <S.Container btnSelected={btnSelected}>
        <S.Text>{selector}</S.Text>
      </S.Container>
    </TouchableOpacity>
  );
};
