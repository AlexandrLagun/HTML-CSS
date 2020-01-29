import {actionTypes} from "../actions/actionTypes";

const initialState = {
  forecast: "oneDay",
  data: null
};

export default function changeForecast(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        forecast1Day: null,
        forecast5Days: null
      };
    case actionTypes.CHANGE_SUCCESSFULLY1:
      return {
        ...state,
        forecast1Day: action.payload,
        
      };
    case actionTypes.CHANGE_SUCCESSFULLY5:
      return {
        ...state,
        forecast5Days: action.payload,
      };
    case actionTypes.CHANGE_FAILURE1:
      return {
        ...state,
        err1Day: action.payload,
      };
    case actionTypes.CHANGE_FAILURE5:
      return {
        ...state,
        err5Days: action.payload,
      };  
    
    default:
      return state;
  }
}