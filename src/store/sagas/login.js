import { put, call } from "redux-saga/effects";
import { navigate } from "~/services/navigation";
import api from "~/services/api";

import { Creators as LoginActions } from "~/store/ducks/login";

export function* login(action) {
  const { user } = action.payload;
  try {
    const data = yield call(api.getToken, user);

    if (data.response && data.response.status >= 400)
      throw "Usuário  ou senha inválidos";

    if (data.response === undefined && data.status === undefined)
      throw "Não conseguimos se conectar com o servidor";
    // return yield put(LoginActions.loginSuccess());

    return navigate("Dashboard");
  } catch (error) {
    return yield put(LoginActions.loginFail(error));
  }
}
