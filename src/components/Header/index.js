import React from "react";
import Logo from "~/src/assets/logo-branca.svg";
import { withNavigation } from "react-navigation";
import { Container, ImageContainer, StatusBar } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "~/src/styles";

const Header = props => {
  const { navigation, go } = props;
  const handlerPress = () => {
    navigation.navigate(go);
  };
  return (
    <Container>
      <StatusBar />
      {!!go && (
        <Icon
          name="arrow-left"
          size={20}
          color={colors.white}
          onPress={() => handlerPress()}
        />
      )}

      <ImageContainer>
        <Logo />
      </ImageContainer>
    </Container>
  );
};

export default withNavigation(Header);
