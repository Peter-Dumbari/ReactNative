import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER,
} from "../../constants/actionTypes";

const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        data: payload,
      };

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
};

export default auth;
