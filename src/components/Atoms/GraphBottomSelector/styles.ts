import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const Container = styled.View<{ btnSelected: boolean }>`
  align-self: "center";
  padding: 8px;
  background-color: ${({ btnSelected }) =>
    btnSelected ? colors.lightPurple : colors.white};
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 15px;
  line-height: 19px;
`;
