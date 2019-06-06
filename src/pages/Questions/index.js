import React, { Component } from "react";
import Header from "~/src/components/Header";
import TabItem from "~/src/components/TabItem";

import api from "~/src/services/api";
import Toast from "@rimiti/react-native-toastify";

import {
  Container,
  Content,
  Title,
  FormContainer,
  Text,
  TextSuccess,
  Input,
  InputError,
  TextArea,
  TextAreaError,
  Button,
  ActivityIndicator
} from "./styles";

import { Creators as LoginActions } from "~/src/store/ducks/login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Questions extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    loading: false,
    success: "",
    error: "",
    validEmail: null,
    validName: null,
    validMessage: null
  };

  static navigationOptions = {
    tabBarIcon: props => (
      <TabItem
        iconName="wpforms"
        focused={props.focused}
        tintColor={props.tintColor}
      />
    )
  };

  cleanState = params => {
    this.setState({
      name: "",
      email: "",
      message: "",
      loading: false,
      success: "",
      error: "",
      validEmail: null,
      validName: null,
      validMessage: null,
      ...params
    });
  };

  validateEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  validateInputs = () => {
    const { name, email, message } = this.state;
    const validates = {};
    validates.validName = name.length < 5 ? false : true;
    validates.validMessage = message.length < 10 ? false : true;
    validates.validEmail = this.validateEmail(email);
    return validates;
  };

  handlerButton = async () => {
    const { name, email, message } = this.state;
    this.setState({ loading: true });
    const validates = this.validateInputs();
    if (
      !validates.validName ||
      !validates.validEmail ||
      !validates.validMessage
    ) {
      this.toastify.show("Preencha os campos corretamente", 1000);
      return this.setState({ loading: false, ...validates });
    }
    try {
      await api.post("/questions", { name, email, message });

      this.cleanState({
        success: "Obrigado! Responderemos você no email informado"
      });
    } catch (error) {
      console.tron.log(error);
      let message = "Problemas de conexão, pode tentar tarde? :)";

      if (error.response && error.response.status === 400) {
        message = "Todos os campos devem ser preenchidos";
      }

      this.toastify.show(message, 1000);
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      loading,
      error,
      success,
      validEmail,
      validMessage,
      validName
    } = this.state;

    return (
      <Container>
        <Toast position="center" ref={c => (this.toastify = c)} />
        <Header />
        <Content>
          <Title>Dúvidas? entre em contato já.</Title>
          <FormContainer>
            {!!error && <Text>{error}</Text>}
            {!!success && <TextSuccess>{success}</TextSuccess>}
            <Text>Nome: </Text>
            {validName || validName === null ? (
              <Input
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                placeholder="Ex.: Luiz Teixeira.. (min:5)"
              />
            ) : (
              <InputError
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                placeholder="Ex.: Luiz Teixeira..  (min:5)"
              />
            )}
            <Text>Email: </Text>
            {validEmail || validEmail === null ? (
              <Input
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="Ex.: luiz@gmail.com.."
              />
            ) : (
              <InputError
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="Ex.: luiz@gmail.com.."
              />
            )}
            <Text>Mensagem: </Text>
            {validMessage || validMessage === null ? (
              <TextArea
                value={this.state.message}
                onChangeText={message => this.setState({ message })}
                placeholder="Digite aqui sua mensagem...(min:10)"
              />
            ) : (
              <TextAreaError
                value={this.state.message}
                onChangeText={message => this.setState({ message })}
                placeholder="Digite aqui sua mensagem...(min:10)"
              />
            )}
            <Button onPress={() => this.handlerButton()}>
              {loading ? (
                <ActivityIndicator color="#fff" size={30} />
              ) : (
                <Text>Enviar</Text>
              )}
            </Button>
          </FormContainer>
        </Content>
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
)(Questions);
