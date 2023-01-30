import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const Container = styled.View`
  width: 100%;
  height: 105px;
  background: ${colors.purple};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
`;

export const TopText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${colors.white};
  max-width: 70%;
`;

export const BottomText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${colors.white};
  margin-top: 10px;
`;
