import { actionTypes  } from './actionTypes/userActionTypes';

export const signUpPending = () => {
  return {
    type: actionTypes.SIGN_UP_PENDING,
  };
}

export const signUpSuccess = (data) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data
  };
}

export const signUpError = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAILURE,
    payload: error
  };
}

export const logInPending = () => {
  return {
    type: actionTypes.LOG_IN_PENDING,
  };
}

export const logInSuccess = (data) => {
  return {
    type: actionTypes.LOG_IN_SUCCESS,
    payload: data
  };
}

export const logInError = (error) => {
  return {
    type: actionTypes.LOG_IN_FAILURE,
    payload: error
  };
}

export const signOutPending = () => {
  return {
    type: actionTypes.SIGN_OUT_PENDING,
  };
}

export const signOutSuccess = (data) => {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS,
    payload: data
  };
}

export const signOutError = (error) => {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
    payload: error
  };
}

export const getProfilePending = () => {
  return {
    type: actionTypes.GET_PROFILE_PENDING,
  };
}

export function getProfileSuccess(data) {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: data
  };
}

export function getProfileError(error) {
  return {
    type: actionTypes.GET_PROFILE_FAILURE,
    payload: error
  };
}


/* logIn, sighUp and signOut actions...

export const setFirstName = (firstName) => {  
  return {
    type: userActionTypes.SET_FIRST_NAME,
    payload: {
      firstName
    }
  }  
}

export const setLastName = (lastName) => {  
  return {
    type: userActionTypes.SET_LAST_NAME,
    payload: {
      lastName
    }
  }  
}

export const setUsername = (username) => {  
  return {
    type: userActionTypes.SET_USERNAME,
    payload: {
      username
    }
  }  
}

export const setEmail = (email) => {  
  return {
    type: userActionTypes.SET_EMAIL,
    payload: {
      email
    }
  }  
}

export const setPassword = (password) => {  
  return {
    type: userActionTypes.SET_PASSWORD,
    payload: {
      password
    }
  }  
}

export const setPasswordConfirmation = (passwordConfirm) => {  
  return {
    type: userActionTypes.SET_PASSWORD_CONFIRMATION,
    payload: {
      passwordConfirm
    }
  }  
}

export const getInfo = () => {  
  return {
    type: userActionTypes.GET_INFO,
    payload: {}
  }  
}

export const reset = () => {  
  return {
    type: userActionTypes.RESET,
    payload: {}
  }  
}

*/