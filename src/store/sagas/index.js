import { all, takeLatest } from "redux-saga/effects";

/**
 * TYPES
 */
import { Types as LoginTypes } from "~/src/store/ducks/login";
import { Types as ChampionshipTypes } from "~/src/store/ducks/championship";

/**
 * SAGA FUNCTIONS
 */
import { login } from "./login";
import {
  deleteChampionship,
  updateChampionship,
  loadChampionships
} from "./championship";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(ChampionshipTypes.DELETE_REQUEST, deleteChampionship),
    takeLatest(ChampionshipTypes.UPDATE_REQUEST, updateChampionship),
    takeLatest(ChampionshipTypes.LOAD_REQUEST, loadChampionships),

    takeLatest(ChampionshipTypes.UPDATE_SUCCESS, loadChampionships),
    takeLatest(ChampionshipTypes.DELETE_SUCCESS, loadChampionships)
  ]);
}
