import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

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

export const BottomContainer = styled.View`
  padding: ${metrics.littlePadding};
  padding-top: 0px;
`;

export const BottomText = styled.Text`
  padding: ${metrics.basePadding};
  font-weight: bold;
  color: ${colors.white};
  align-self: center;
`;
export const BottomButton = styled.TouchableOpacity`
  background-color: ${colors.defaultGreen};
  border-radius: ${metrics.bigRadius};
`;
