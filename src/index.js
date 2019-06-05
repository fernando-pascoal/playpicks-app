import React, { Component } from "react";
import { Provider } from "react-redux";
import "~/config/reactotron";
import store from "~/store";
import Routes from "./routes";
import { setNavigator } from "~/services/navigation";

import CodePush from "react-native-code-push";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
