import React from "react";
import Header from "~/components/Header";
import {
  Container,
  Content,
  Title,
  DescriptionText,
  Text,
  Button,
  TextButton
} from "./styles";

const Plans = () => (
  <Container>
    <Header go="NewMatches" />
    <Content>
      <Title>Planos de assinaturas</Title>
      <DescriptionText>Picks com odd acima de 1.60</DescriptionText>
      <DescriptionText>Duplas diárias</DescriptionText>
      <DescriptionText>Central de conteúdo no instagram</DescriptionText>
      <DescriptionText>Maior número de Picks</DescriptionText>
      <Text>Plano de 15 dias</Text>
      <Button>
        <TextButton>Assine por R$ 29,99</TextButton>
      </Button>
      <Text>Plano de 30 dias</Text>
      <Button>
        <TextButton>Assine por R$ 34,99</TextButton>
      </Button>
    </Content>
  </Container>
);

export default Plans;
