import { colors } from "../../../global/colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder: string;
  type?: "password" | "email" | null;
}

export const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const handleHidePassword = () => setHidePassword(!hidePassword);

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        secureTextEntry={type === "password" && hidePassword}
        keyboardType={Boolean(type === "email") ? "email-address" : undefined}
        placeholderTextColor={colors.grey500}
      />
      {type === "password" && (
        <S.Icon onPress={handleHidePassword}>
          {hidePassword ? (
            <Feather name="eye" size={18} color={colors.grey700} />
          ) : (
            <Feather name="eye-off" size={18} color={colors.grey700} />
          )}
        </S.Icon>
      )}
    </S.Container>
  );
};
