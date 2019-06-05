import styled from "styled-components/native";
import { metrics, colors } from "~/styles";

export const Container = styled.View`
  background-color: ${colors.defaultGreen};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  padding: ${metrics.basePadding};
`;
export const StatusBar = styled.StatusBar.attrs({
  barStyle: colors.defaultGreen,
  backgroundColor: colors.defaultGreen
})``;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 130px;
`;
