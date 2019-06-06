import React, { Component } from "react";
import {
  Container,
  FormContainer,
  ViewImage,
  Input,
  Button,
  Text,
  TextBack,
  ActivityIndicator
} from "./styles";
import Logo from "~/src/assets/logo.svg";

import { Creators as LoginActions } from "~/src/store/ducks/login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handlerBack = () => {
    const { navigation } = this.props;
    console.log(this.props);
    navigation.navigate("Dashboard");
  };

  handlerButton = async () => {
    const { loginRequest } = this.props;
    const { email, password, password_confirmation } = this.state;

    loginRequest({ email, password, password_confirmation });
  };

  render() {
    const { error, loading } = this.props;
    return (
      <Container>
        <FormContainer>
          <ViewImage>
            <Logo width="100%" height="100%" />
          </ViewImage>
          {!!error && <Text>{error}</Text>}
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="email"
          />
          <Input
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="senha"
          />
          <Button onPress={() => this.handlerButton()}>
            {loading ? (
              <ActivityIndicator color="#fff" size={30} />
            ) : (
              <Text>Entrar</Text>
            )}
          </Button>
          <TextBack onPress={() => this.handlerBack()}>Voltar</TextBack>
        </FormContainer>
      </Container>
    );
  }
}

mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
  user: state.login.user
});

mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
