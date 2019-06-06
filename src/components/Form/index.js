import React, { Component, Fragment } from "react";
import Logo from "~/src/assets/logo.svg";
import {
  Container,
  FormContainer,
  ViewImage,
  Input,
  TextArea,
  Text,
  Button,
  ActivityIndicator
} from "./styles";

import { Creators as LoginActions } from "~/src/store/ducks/login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    token: "",
    message: ""
  };
  renderInputs = type => {
    switch (type) {
      case "signup":
        return (
          <Fragment>
            <Input
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              placeholder="nome"
            />
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
            <Input
              secureTextEntry={true}
              value={this.state.password_confirmation}
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })
              }
              placeholder="Confirmação de senha"
            />
          </Fragment>
        );
      case "signin":
        return (
          <Fragment>
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
          </Fragment>
        );
      case "token":
        return (
          <Fragment>
            <Input
              value={this.state.token}
              onChangeText={token => this.setState({ token })}
              placeholder="token"
            />
          </Fragment>
        );
      case "questions":
        return (
          <Fragment>
            <Text>Nome: </Text>
            <Input
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              placeholder="Ex.: Luiz Teixeira.."
            />
            <Text>Email: </Text>
            <Input
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="Ex.: luiz@gmail.com.."
            />
            <Text>Mensagem: </Text>
            <TextArea
              value={this.state.message}
              onChangeText={message => this.setState({ message })}
              placeholder="Digite aqui sua mensagem..."
            />
          </Fragment>
        );
      default:
        return;
    }
  };

  handlerButton = async type => {
    const { loginRequest } = this.props;
    const { name, email, password, token } = this.state;

    if (type === "signin") {
      loginRequest({ email, password });
    }
  };
  render() {
    const { type, loading, error } = this.props;
    return (
      <Container>
        <FormContainer>
          {type != "questions" && (
            <ViewImage>
              <Logo width="100%" height="100%" />
            </ViewImage>
          )}
          {!!error && <Text>{error}</Text>}
          {this.renderInputs(type)}
          <Button onPress={() => this.handlerButton(type)}>
            {loading ? (
              <ActivityIndicator color="#fff" size={30} />
            ) : (
              <Text>Enviar</Text>
            )}
          </Button>
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
)(Form);
