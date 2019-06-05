/**
 * ACTION TYPES
 */

export const Types = {
  OPEN_MODAL_EDIT: "OPEN_MODAL_EDIT",
  OPEN_MODAL_ADD: "OPEN_MODAL_ADD",
  LOAD_REQUEST: "LOAD_REQUEST",
  LOAD_SUCCESS: "LOAD_SUCCESS",
  LOAD_FAIL: "LOAD_FAIL",
  DELETE_REQUEST: "DELETE_REQUEST",
  DELETE_SUCCESS: "DELETE_SUCCESS",
  DELETE_FAIL: "DELETE_FAIL",
  UPDATE_REQUEST: "UPDATE_REQUEST",
  UPDATE_SUCCESS: "UPDATE_SUCCESS",
  UPDATE_FAIL: "UPDATE_FAIL"
};

/**
 * ACTION CREATORS
 */
export const Creators = {
  openModalEdit: (value, championship) => ({
    type: Types.OPEN_MODAL_EDIT,
    payload: { value, championship }
  }),
  openModalAdd: value => ({
    type: Types.OPEN_MODAL_ADD,
    payload: { value }
  }),
  loadRequest: () => ({
    type: Types.LOAD_REQUEST
  }),
  loadSuccess: championships => ({
    type: Types.LOAD_SUCCESS,
    payload: { championships }
  }),
  loadFail: error => ({
    type: Types.LOAD_FAIL,
    payload: { error }
  }),
  deleteRequest: id => ({
    type: Types.DELETE_REQUEST,
    payload: { id }
  }),
  deleteSuccess: () => ({
    type: Types.DELETE_SUCCESS
  }),
  deleteFail: error => ({
    type: Types.DELETE_FAIL,
    payload: { error }
  }),
  updateRequest: championship => ({
    type: Types.UPDATE_REQUEST,
    payload: { championship }
  }),
  updateSuccess: () => ({
    type: Types.UPDATE_SUCCESS
  }),
  updateFail: error => ({
    type: Types.UPDATE_FAIL,
    payload: { error }
  })
};

/**
 * RECUCERS
 */

const INITIAL_STATE = {
  loading: false,
  error: "",
  modalVisibleAdd: false,
  modalVisibleEdit: false,
  championships: [],
  championship: { id: "", name: "" }
};

export default function championships(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL_EDIT:
      return {
        ...state,
        modalVisibleEdit: action.payload.value,
        championship: action.payload.championship
      };
    case Types.OPEN_MODAL_ADD:
      return {
        ...state,
        modalVisibleAdd: action.payload.value,
        modalVisibleEdit: false
      };
    case Types.LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        championships: action.payload.championships,
        modalVisibleAdd: false,
        modalVisibleEdit: false,
        championship: { id: "", name: "" }
      };
    case Types.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case Types.DELETE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ""
      };
    case Types.DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case Types.UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        modalVisibleAdd: false
      };
    case Types.UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
