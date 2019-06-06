import styled from "styled-components/native";
import { colors, metrics } from "~/src/styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
  padding: ${metrics.basePadding};
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.white};
  align-self: center;
  padding: ${metrics.basePadding};
`;

export const TextError = styled.Text`
  font-weight: bold;
  color: ${colors.defaultRed};
  align-self: center;
  padding-top: ${metrics.basePadding};
`;
