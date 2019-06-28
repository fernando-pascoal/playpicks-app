import React, { Component, Fragment } from "react";
import Header from "~/src/components/Header";
import Match from "~/src/components/Match";
import api from "~/src/services/api";
import TabItem from "~/src/components/TabItem";

import { Container, Title } from "./styles";
import { ActivityIndicator, FlatList, Animated } from "react-native";
import Toast from "@rimiti/react-native-toastify";

class LastMatches extends Component {
  state = {
    matches: [],
    loading: true,
    refreshing: false,
    offset: new Animated.Value(50),
    opacity: new Animated.Value(0)
  };

  static navigationOptions = {
    tabBarIcon: props => (
      <TabItem
        iconName="calendar-o"
        focused={props.focused}
        tintColor={props.tintColor}
      />
    )
  };

  animate = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.offset, {
        toValue: 0,
        duration: 500
      })
    ]).start();
  };
  animateReverse = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(this.state.offset, {
        toValue: 50,
        duration: 500
      })
    ]).start();
  };

  async componentDidMount() {
    this.loadMatches();
  }

  loadMatches = async () => {
    this.animateReverse();
    try {
      const { data } = await api.get("/matches?before=true");
      this.toastify.show("Partidas carregadas", 1000);

      this.setState({
        matches: data.data,
        loading: false
      });
      this.animate();
    } catch (error) {
      this.setState({ loading: false });
      let message = "Problemas de conexão, não consegui obter mais jogos";
      if (error.response && error.response.data.error.message) {
        message = error.response.data.error.message;
      }
      this.toastify.show(message, 1000);
    }
  };

  renderMatches = () => {
    const { matches, loading } = this.state;
    return (
      <Animated.View
        style={[
          { transform: [{ translateY: this.state.offset }] },
          { opacity: this.state.opacity }
        ]}
      >
        <FlatList
          contentContainerStyle={{ minHeight: 400 }}
          data={matches}
          onRefresh={this.loadMatches}
          refreshing={loading}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Match key={item.id} match={item} />}
        />
      </Animated.View>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <Toast position="center" ref={c => (this.toastify = c)} />
        <Header />
        <Container>
          <Title>Picks Anteriores</Title>
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

export default LastMatches;
