import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const Container = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  height: 48px;
  background-color: ${colors.grayBackground};
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 39px;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 30px;
`;
