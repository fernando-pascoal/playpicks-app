import { all, takeLatest } from "redux-saga/effects";

/**
 * TYPES
 */
import { Types as LoginTypes } from "~/src/store/ducks/login";

/**
 * SAGA FUNCTIONS
 */
import { login } from "./login";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]);
}
