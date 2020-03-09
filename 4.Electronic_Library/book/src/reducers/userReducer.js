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
  isBanned: false
}


const userReducer = handleActions( {
  SET_USER: ( state, action ) => ( {
    ...state,
    _id: action.data._id,
    firstname: action.data.firstname,
    lastname: action.data.lastname,
    username: action.data.username,
    email: action.data.email,
    takenBooks: action.data.takenBooks,
    bookedBooks: action.data.bookedBooks,
    isAdmin: action.data.isAdmin,
    isBanned: action.data.isBanned
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