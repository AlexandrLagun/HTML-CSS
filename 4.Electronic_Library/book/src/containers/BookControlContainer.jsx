import React from "react";
import { connect } from "react-redux";
import { getBookData, handOutBook, cancelBookReservation, returnBook } from "../actions/admin";
import BookControl from "../components/BookControl";
import Spinner from '../components/Spinner';

class BookControlContainer extends React.PureComponent {

    state = {
        showSpiner: true
    }

    componentDidMount() {
        this.props.onGetBookData("5e71fc738d5e9124f4e6637a").then(() => this.setState({ showSpiner: false }))
      }

    handOutHandler = (userId) => {
        this.props.onHandOutBook(userId, "5e71fc738d5e9124f4e6637a");
    }

    cancelReservationHandler = (userId) => {
        this.props.onCancelReservation(userId, "5e71fc738d5e9124f4e6637a");
    }

    returnBook = (userId) => {
        this.props.onReturnBook(userId, "5e71fc738d5e9124f4e6637a");
    }

    goBack = () => {
        this.props.history.goBack()
      }
    
    clickOnUserHandler = (userId) => {
        this.props.history.push(`/updateusers/${userId}`)
    }

    render() {
        let content = this.state.showSpiner ?
          <Spinner/> :
          <BookControl adminContent={this.props.adminContent} 
                       handOutHandler={this.handOutHandler} 
                       cancelReservationHandler={this.cancelReservationHandler} 
                       returnBook={this.returnBook} 
                       goBack={this.goBack} 
                       clickOnUserHandler={this.clickOnUserHandler}
                    />
        return (
          < >
            { content }
          </>)
      }
}



    const mapStateToProps = state => {
        return {
          adminContent: state.adminReducer.updatedBook
        }
    }
    const mapDispatchToProps = dispatch => {
        return {
          onGetBookData: (bookId) => dispatch(getBookData(bookId)),
          onHandOutBook: (userId, bookId) => dispatch(handOutBook(userId, bookId)),
          onCancelReservation: (userId, bookId) => dispatch(cancelBookReservation(userId, bookId)),
          onReturnBook: (userId, bookId) => dispatch(returnBook(userId, bookId))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(BookControlContainer);