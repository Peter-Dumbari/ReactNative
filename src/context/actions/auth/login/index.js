import { LOGIN_SUCCESS } from "../../../../constants/actionTypes";
export const loginFn = () => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {},
  });
};
