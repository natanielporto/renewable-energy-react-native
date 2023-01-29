import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const CheckBox = styled.Text<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.gray300};
  border-radius: 2px;
  background-color: ${({ checked }) =>
    checked ? colors.primary : colors.white};
`;
