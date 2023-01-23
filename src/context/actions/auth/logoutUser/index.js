import { LOGOUT_USER } from "../../../../constants/actionTypes";
export const logoutFn = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
    payload: {},
  });
};
