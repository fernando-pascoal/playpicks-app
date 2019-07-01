import React, { Component } from "react";
import "~/src/config/reactotron";
import Routes from "./routes";
import { setNavigator } from "~/src/services/navigation";

// import OneSignal from "react-native-onesignal";
import CodePush from "react-native-code-push";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   OneSignal.init("37dc8c58-d97d-4f2e-97b2-c754a8bd223e");
  //   OneSignal.addEventListener("received", this.onRecived);
  //   OneSignal.addEventListener("opened", this.onOpened);
  //   OneSignal.addEventListener("ids", this.onIds);
  //   OneSignal.configure();
  // }

  // onRecived = data => {};
  // onOpened = notification => {};
  // //obtem o id específico da notificação para ser relacionado
  // //em tabela caso queira enviar uma notificação específica para um usuário
  // onIds = onIds => {};

  // componentWillUnmount() {
  //   OneSignal.removeEventListener("recived", this.onRecived);
  //   OneSignal.removeEventListener("opened", this.onOpened);
  //   OneSignal.removeEventListener("id", this.onIds);
  // }

  render() {
    return <Routes ref={setNavigator} />;
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
