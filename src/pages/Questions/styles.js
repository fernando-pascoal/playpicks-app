import styled from "styled-components/native";
import { colors, metrics } from "~/src/styles";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.dark};
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
  flex: 1;
  width: 100%;
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
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
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
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding};
  height: 150px;
  border: solid 2px;
  border-color: ${colors.defaultRed};
`;

export const ActivityIndicator = styled.ActivityIndicator``;
