import { combineReducers } from 'redux';
import  userReducer  from './userReducer';
import  bookReducer  from './bookReducer';
import  searchBooksReducer  from './searchedBooksReducer';
import  bookPageReducer  from './bookPageReducer';

const rootReducer = combineReducers( {
  userReducer,
  bookReducer,
  searchBooksReducer,
  bookPageReducer,
} )

export default rootReducer