import { handleActions } from 'redux-actions';


const adminReducer = handleActions( {
  SET_UPDATED_BOOK: ( state, action ) => ( {
      ...state,
      ...action.data
    } )
  }, {} );
  
  
  export default adminReducer;