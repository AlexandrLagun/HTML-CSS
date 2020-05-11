import React from 'react';
import { connect } from 'react-redux';
import UserLibrary from '../components/YourLibrary';
import { cancelBookReservationUser } from "../actions/booksActions";

class UserLibraryContainer extends React.PureComponent {

    cancelReservationHandler = bookId => {
      this.props.onCancelReservation(bookId)
    }
  
    render() {
      return <UserLibrary bookingBooks={this.props.bookingBooks} cancelBook={this.cancelBook} booksOnHand = {this.props.booksOnHand}/>
    }
  }
  
  const mapStateToProps = state => {
    return {
      bookedBooks: state.userReducer.bookedBooks,
      takenBooks: state.userReducer.takenBooks
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onCancelReservation: (bookId) => dispatch(cancelBookReservationUser(bookId))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserLibraryContainer);