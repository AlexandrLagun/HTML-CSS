import { actionTypes } from './actionTypes';


const registrationRequest = (bool) => {
  return {
      type: actionTypes.REGISTRATION_REQUEST,
      payload: bool
  };
}

const setValidationMessage  = (message) => {
  return {
    type: 'actionTypes.',
    payload: message
  }
}




export default {
  registrationRequest,
  setValidationMessage

};