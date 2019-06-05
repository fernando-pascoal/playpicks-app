import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View`
  background-color: ${colors.darkLight};
  border: solid 1px;
  border-color: ${colors.dark};
  border-radius: ${metrics.bigRadius};
  margin-bottom: ${metrics.baseMargin};
`;

export const HeaderContainer = styled.View`
  padding: ${metrics.littlePadding};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.dark};
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${colors.defaultGreen};
  font-weight: 500;
`;

export const PickText = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: ${colors.white};
  font-weight: 500;
`;

export const PickTextFail = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: ${colors.defaultRed};
  font-weight: 500;
`;

export const ContentContainer = styled.View`
  padding: ${metrics.basePadding};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.dark};
  flex-direction: row;
  justify-content: center;
`;

export const ClubeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MathContent = styled.Text`
  color: ${colors.white};
  padding: ${metrics.littlePadding};
  font-weight: bold;
`;

export const ClubeImage = styled.Image`
  min-width: 32px;
  min-height: 35px;
`;
export const ClubeText = styled.Text`
  width: 100px;
  text-align: center;
  color: ${colors.white};
  padding: ${metrics.littlePadding};
  font-weight: bold;
`;
