import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const Container = styled.View`
  width: 159px;
  height: 215px;
  background: ${colors.gray100};
  border-radius: 10px;
  padding-top: 21px;
  padding-left: 12px;
`;

export const Title = styled.Text`
  width: 105px;
  height: 30px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.black};
`;
