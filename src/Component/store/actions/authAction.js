import { apiLogginSuccess } from '../../api/authServices';
import actionTypes from './actionType';

export const loginSuccess = (id) => async (dispath) => {
  try {
    const response = await apiLogginSuccess(id);
    if (response?.data.err === 0) {
      dispath({
        type: actionTypes.LOGIN_SUCESS,
        data: response?.data.token,
      });
    } else {
      dispath({
        type: actionTypes.LOGIN_SUCESS,
        data: null,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.LOGIN_SUCESS,
      data: null,
    });
  }
};

export const logOut = () => ({
  type: actionTypes.LOGOUT,
});
