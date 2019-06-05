import styled from "styled-components/native";
import { colors } from "~/styles";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.defaultGreen};
  margin: 0;
`;

export const CleanContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.darkLight};
  margin: 0;
`;
