import styled from "styled-components/native";
import { colors } from "../../../global/colors";

export const StringContainer = styled.View<{
  color?: string;
  justify: "center" | undefined;
}>`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color || colors.gray700};
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  flex-shrink: 1;
`;
