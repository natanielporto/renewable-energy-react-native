import styled from "styled-components/native";
import { colors } from "../../../global/colors";

interface ButtonCSSProps {
  background?: "primary" | "secondary";
  bordered?: boolean;
}

const { primary, secondary, white, gray500 } = colors;

export const Container = styled.TouchableOpacity<ButtonCSSProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  border-radius: 4px;
  border: ${({ bordered }) => (bordered ? "1px solid" : "none")};

  ${({ background }) => background === "primary" && `background: ${primary}`};
  ${({ background }) =>
    background === "secondary" && `background: ${secondary}`};
  ${({ background, bordered }) =>
    background === "primary" &&
    bordered &&
    `background: ${white}, color: ${primary}, border-color: ${gray500}`};
`;

export const Action = styled.Text<{ bordered: boolean }>`
  font-size: 16px;
  line-height: 26px;
  font-family: "Sora_400Regular";
  ${({ bordered }) => (bordered ? `color: ${primary}` : `color: ${white}`)};
`;
