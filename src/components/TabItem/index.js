import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { View } from "react-native";

import { Container, CleanContainer } from "./styles";

const TabItem = props => {
  const { tintColor, focused, iconName } = props;
  if (focused) {
    return (
      <Container>
        <Icon name={iconName} size={25} color={tintColor} />
      </Container>
    );
  } else {
    return (
      <CleanContainer>
        <Icon name={iconName} size={25} color={tintColor} />
      </CleanContainer>
    );
  }
};

export default TabItem;
