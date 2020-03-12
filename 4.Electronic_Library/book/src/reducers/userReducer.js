import { handleActions } from 'redux-actions';


const defaultState = {
  _id: '',
  firstname: '',
  lastname: '',
  username:  '',
  email: '',
  takenBooks: [],
  bookedBooks: [],
  isAdmin: false,
  isBan: false
}


const userReducer = handleActions( {
  SET_USER: ( state, action ) => ( {
    ...state,
    _id: action.payload._id,
    firstname: action.payload.firstname,
    lastname: action.payload.lastname,
    username: action.payload.username,
    email: action.payload.email,
    takenBooks: action.payload.takenBooks,
    bookedBooks: action.payload.bookedBooks,
    isAdmin: action.payload.isAdmin,
    isBan: action.payload.isBan
  } ),
}, defaultState );

export default userReducer;

/* export const userReducer = (state = initialState, action) => {
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
} */