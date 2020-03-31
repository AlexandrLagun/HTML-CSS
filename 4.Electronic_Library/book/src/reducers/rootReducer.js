import { combineReducers } from 'redux';
import  userReducer  from './userReducer';
import  bookReducer  from './bookReducer';
import  searchBooksReducer  from './searchedBooksReducer';
import  bookPageReducer  from './bookPageReducer';
import  adminReducer  from './adminReducer';

const rootReducer = combineReducers( {
  userReducer,
  bookReducer,
  searchBooksReducer,
  bookPageReducer,
  adminReducer
} )

export default rootReducer