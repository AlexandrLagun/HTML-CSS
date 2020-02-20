//import { userActionTypes } from '../actionTypes/userActionTypes';
import {
  //authUser,
  registerUser
} from '../services/userServices';
import userActionCreators from './userActionCreators';
import httpStatus from 'http-status-codes';
import { authMessages } from '../helpers/validateMessages';

const register = (userData) => {
  return dispatch => {
      dispatch(userActionCreators.registrationRequest(true));

      return registerUser(userData).then(response => {
          handleResponse(response, dispatch);
      });
  };
}


const handleResponse = (response, dispatch) => {
  switch (response.status) {
      case httpStatus.BAD_REQUEST: {
          dispatch(
            userActionCreators.setValidationMessage(authMessages.EMAIL_IS_TAKEN)
          );
          break;
      }
      case httpStatus.UNAUTHORIZED: {
          dispatch(
            userActionCreators.setValidationMessage(authMessages.INCORRECT_EMAIL_OR_PASSWORD)
          );
          break;
      }

      default: {
          const storedUser = JSON.stringify(response);
          localStorage.setItem('user', storedUser);
          window.location.replace('/');
      }
  }
  dispatch(userActionCreators.registrationRequest(false));
}




export default register;