import { handleActions } from 'redux-actions';

const bookPageReducer = handleActions( {
  SET_SINGLE_BOOK: ( state, action ) => ( {
    ...state,
    ...action.book
  } ),
}, {} );


export default bookPageReducer;