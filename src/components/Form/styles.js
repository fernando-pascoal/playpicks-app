import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
`;

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
  multiline: true,
  numberOfLines: 5
})`
  color: ${colors.white};
  background-color: ${colors.darkLight};
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding};
  height: 150px;
`;

export const ActivityIndicator = styled.ActivityIndicator``;
