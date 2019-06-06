import { put, call } from "redux-saga/effects";
import api from "~/src/services/api";

import { Creators as ChampionshipActions } from "~/src/store/ducks/championship";

export function* deleteChampionship(action) {
  const { id } = action.payload;
  try {
    yield call(api.delete, `/championships/${id}`);
    return yield put(ChampionshipActions.deleteSuccess());
  } catch (error) {
    const message = setErrorMessage(error);
    return yield put(ChampionshipActions.deleteFail(message));
  }
}
export function* updateChampionship(action) {
  const { id, name, method } = action.payload.championship;
  try {
    if (method === "update") {
      yield call(api.put, `/championships/${id}`, { name });
    } else {
      yield call(api.post, `/championships`, { name });
    }
    return yield put(ChampionshipActions.updateSuccess());
  } catch (error) {
    const message = setErrorMessage(error);
    return yield put(ChampionshipActions.updateFail(message));
  }
}

export function* loadChampionships() {
  try {
    const championships = yield call(api.get, `/championships`);
    return yield put(ChampionshipActions.loadSuccess(championships.data));
  } catch (error) {
    const message = setErrorMessage(error);
    return yield put(ChampionshipActions.loadFail(message));
  }
}

function setErrorMessage(error) {
  let message = "Algum problema aconteceu, não conseguimos deletar";
  if (!!error.response && error.response.status === 404) {
    message = "O item já é inexistente";
  }
  if (!!error.response && error.response.status === 401) {
    message = "Você não tem permissão suficiente para isso";
  }
  return message;
}
