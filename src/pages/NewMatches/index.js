import React, { Component, Fragment } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "~/src/components/Header";
import Match from "~/src/components/Match";
import api from "~/src/services/api";
import TabItem from "~/src/components/TabItem";
import { Container, Title, TextError } from "./styles";

import { ActivityIndicator, FlatList } from "react-native";
import Toast from "@rimiti/react-native-toastify";

class NewMatches extends Component {
  state = {
    matches: [],
    error: "",
    loading: true,
    refreshing: false
  };

  static navigationOptions = {
    tabBarIcon: props => {
      return (
        <TabItem
          iconName="futbol-o"
          focused={props.focused}
          tintColor={props.tintColor}
        />
      );
    }
  };

  async componentDidMount() {
    this.loadMatches();
  }

  loadMatches = async () => {
    try {
      const matches = await api
        .get("/matches?today=true")
        .then(resp => resp.data);

      this.toastify.show("Partidas carregadas", 1000);
      this.setState({ matches: matches.data, loading: false });
    } catch (error) {
      let message = "Problemas de conexão, não consegui obter mais jogos";
      if (error.response && error.response.error.message) {
        message = error.response.error.message;
      }
      this.toastify.show(message, 1000);
      this.setState({ loading: false });
    }
  };

  handlerButton = () => {
    const { navigation } = this.props;
    navigation.navigate("Plans");
  };

  renderMatches = () => {
    const { matches, refreshing } = this.state;
    return (
      <FlatList
        data={matches}
        onRefresh={this.loadMatches}
        refreshing={refreshing}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Match key={item.id} match={item} />}
      />
    );
  };

  render() {
    const { loading, error } = this.state;

    return (
      <Fragment>
        <Toast position="center" ref={c => (this.toastify = c)} />
        <Header />
        <Container>
          <Title>Picks diários</Title>
          {!!error && <TextError>{error}</TextError>}
          {loading ? (
            <ActivityIndicator color="#fff" size={30} />
          ) : (
            this.renderMatches()
          )}
        </Container>
      </Fragment>
    );
  }
}

export default NewMatches;
