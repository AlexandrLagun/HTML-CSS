import { combineReducers } from 'redux';
import  userReducer  from './userReducer';
import  bookReducer  from './bookReducer';
import  searchBooks  from './searchedBooksReducer';

const rootReducer = combineReducers( {
  userReducer,
  bookReducer,
  searchBooks
} )

export default rootReducer