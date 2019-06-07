import React from "react";

import {
  Container,
  HeaderContainer,
  HeaderText,
  ContentContainer,
  ClubeContainer,
  ClubeImage,
  ClubeText,
  MathContent,
  PickText,
  PickTextFail
} from "./styles";

const Match = props => {
  const { match } = props;
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>
          {match.day} - {match.championship.name}
        </HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ClubeContainer>
          <ClubeText>{match.mandant.name}</ClubeText>
          <ClubeImage source={{ uri: match.mandant.file.url }} />
          <MathContent>
            {match.visitor_goals != null && match.mandant_goals != null
              ? `${match.mandant_goals} x ${match.visitor_goals}`
              : match.hour}
          </MathContent>
          <ClubeImage source={{ uri: match.visitor.file.url }} />
          <ClubeText>{match.visitor.name}</ClubeText>
        </ClubeContainer>
      </ContentContainer>

      {match.picks.map(pick => (
        <HeaderContainer key={pick.id}>
          {pick.win ? (
            <PickText>
              {pick.name} - {pick.result}
            </PickText>
          ) : (
            <PickTextFail>
              {pick.name} - {pick.result}
            </PickTextFail>
          )}
        </HeaderContainer>
      ))}
    </Container>
  );
};

export default Match;
