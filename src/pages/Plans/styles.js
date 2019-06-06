import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${metrics.basePadding};
  background-color: ${colors.dark};
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.white};
  align-self: center;
  padding: ${metrics.basePadding};
  padding-top: 0px;
`;

export const DescriptionText = styled.Text`
  padding: ${metrics.littlePadding};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.dark};
  background-color: ${colors.darkLight};
  color: ${colors.white};
  font-weight: 500;
`;

export const Text = styled.Text`
  font-weight: 500;
  color: ${colors.white};
  align-self: center;
  padding: ${metrics.basePadding};
  padding-top: ${metrics.bigPadding};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.defaultGreen};
  border-radius: ${metrics.baseRadius};
  height: 50px;
  justify-content: center;
`;
export const TextButton = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors.white};
  align-self: center;
  padding: ${metrics.basePadding};
`;
