/**
 * ACTION TYPES
 */

export const Types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL"
};

/**
 * ACTION CREATORS
 */
export const Creators = {
  loginRequest: user => ({ type: Types.LOGIN_REQUEST, payload: { user } }),
  loginSuccess: () => ({ type: Types.LOGIN_SUCCESS }),
  loginFail: error => ({ type: Types.LOGIN_FAIL, payload: { error } })
};

const INITIAL_STATE = {
  loading: false,
  error: ""
};

/**
 * RECUCERS
 */

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ""
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
