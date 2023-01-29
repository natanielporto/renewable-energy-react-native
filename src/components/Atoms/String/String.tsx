import { StyleProp } from "react-native";
import * as S from "./styles";

interface StringProps {
  children: string | JSX.Element | JSX.Element[];
  justify?: "center" | undefined;
  color?: string;
}

export const String: React.FC<StringProps> = ({ children, justify, color }) => {
  return (
    <S.StringContainer justify={justify} color={color}>
      {children}
    </S.StringContainer>
  );
};
