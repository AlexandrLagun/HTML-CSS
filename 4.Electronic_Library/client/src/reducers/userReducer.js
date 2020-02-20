import { actionTypes } from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  errorValidationMessage: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SET_VALIDATION_MESSAGE: {
          return { ...state, errorValidationMessage: action.payload };
      }
      case actionTypes.REGISTRATION_REQUEST: {
          return {
              ...state,
              isLoading: action.payload
          };
      }
      default: {
          return state;
      }
  }
}

