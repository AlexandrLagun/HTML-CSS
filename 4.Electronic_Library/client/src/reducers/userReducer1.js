import {actionTypes} from '../actions/actionTypes/userActionTypes';

export const initialState = {
    pending: false,
    data: {},
    isLoggedIn: false,
    isAdmin: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SIGN_UP_PENDING: 
      return {
        ...state,
        pending: true
      }
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case actionTypes.LOG_IN_PENDING: 
      return {
          ...state,
          pending: true
      }    
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        isLoggedIn: true
      }
    case actionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      }  
    case actionTypes.SIGN_OUT_PENDING: 
      return {
        ...state,
        pending: true
      }    
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        isLoggedIn: false
      }
    case actionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      }    
    case actionTypes.GET_PROFILE_PENDING: 
      return {
        ...state,
        pending: true
    }
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        isLoggedIn: true
      }
    case actionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        pending: false,
        isLoggedIn: false,
        error: action.payload
      }

    default: 
      return state;
    }
}