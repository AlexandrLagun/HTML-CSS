import { handleActions } from 'redux-actions';

const searchBooks = handleActions( {
    SET_SEARCHED_BOOKS: ( state, action ) => ( [ ...action.books ] ),
  },
  []
);

export default searchBooks;