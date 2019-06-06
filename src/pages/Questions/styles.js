import styled from "styled-components/native";
import { colors, metrics } from "~/src/styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
`;

export const Content = styled.View`
  padding: ${metrics.basePadding};
`;

export const Title = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
  align-self: center;
`;

export const FormContainer = styled.View`
  width: 100%;
`;
export const ViewImage = styled.View`
  align-self: center;
  width: 200px;
  height: 100px;
  margin-bottom: ${metrics.baseMargin};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
  autoCapitalize: "none"
})`
  color: ${colors.white};
  background-color: ${colors.darkLight};
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
  padding-left: ${metrics.basePadding};
  height: 50px;
`;

export const InputError = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
  autoCapitalize: "none"
})`
  color: ${colors.white};
  background-color: ${colors.darkLight};
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
  padding-left: ${metrics.basePadding};
  height: 50px;
  border: solid 2px;
  border-color: ${colors.defaultRed};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.defaultGreen};
  border-radius: ${metrics.baseRadius};
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: ${colors.white};
  margin-bottom: 2px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TextSuccess = styled.Text`
  text-align: center;
  color: ${colors.defaultGreen};
  margin-bottom: 2px;
  font-weight: bold;
`;

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
  multiline: true,
  numberOfLines: 10
})`
  color: ${colors.white};
  background-color: ${colors.darkLight};
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding};
  height: 150px;
`;

export const TextAreaError = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
  multiline: true
})`
  color: ${colors.white};
  background-color: ${colors.darkLight};
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding};
  height: 150px;
  border: solid 2px;
  border-color: ${colors.defaultRed};
`;

export const ActivityIndicator = styled.ActivityIndicator``;
