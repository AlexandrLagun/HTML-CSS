import {actionTypes} from "../actions/actionTypes";

const initialState = {
  _id: '',
  firstname: '',
  lastname: '',
  username:  '',
  email: '',
  takenBooks: [],
  bookedBooks: [],
  isAdmin: false,
  isBanned: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: 
    return {
      ...state,
      _id: action.user._id,
      firstname: action.user.firstname,
      lastname: action.user.lastname,
      username:  action.user.username,
      email: action.user.email,
      takenBooks: action.user.takenBooks,
      bookedBooks: action.user.bookedBooks,
      isAdmin: action.user.isAdmin,
      isBanned: action.user.isBanned
    };
    default: return state;

  }
}