import React from "react";
import { connect } from "react-redux";
import BookPage from '../components/BookPage';
import Spinner from '../components/Spinner';
import { addComment, getSingleBook, bookingBook, cancelBookReservationUser } from '../actions/booksActions';
import { deleteComment } from '../actions/admin';
import openSocket from 'socket.io-client';
const socket = openSocket('/');

class BookPageContainer extends React.PureComponent {

    state = {
        bookId: "5e71fc738d5e9124f4e6637a" ,//this.props.match.params.bookId,
        title: '',
        bookAuthor: '',
        year: '',
        genre: '',
        bookDescription: '',
        comments: [],
        count: 0,
        availableCount: 0,
        bookedBy: [],
        takenBy: [],
        bookingTime: 1000 * 60 * 60 * 48,
        showSpiner: true,
        hasUserThisBookOnHands: false,
        hasUserThisBookBooked: false
      }

      componentDidMount() {
        /* if (!this.props.booksDetails[this.state.bookId]) */
        
          this.props.onGetSingleBookData(this.state.bookId);
        socket.emit('requestBook', { bookId: this.state.bookId });
        socket.on('responseBook', data => {
          let comments = data.comments.map((comment, i) => {
            comment.id = i + comment.commentAuthorId + comment.date;
            return comment;
          })
          this.setState({ comments: comments, count: data.count, takenBy: data.takenBy, bookedBy: data.bookedBy, availableCount: data.availableCount, showSpiner: false });
        })
        socket.on(`dataUpdate${this.state.bookId}`, () => {
          socket.emit('requestBook', { bookId: this.state.bookId });
        })
      }


      componentWillUnmount(nextProps, nextState) {
        socket.off('responseBook');
        socket.off(`dataUpdate${this.state.bookId}`);
      }

      componentDidUpdate(prevProps, prevState) {
          /* finding out if this user has this book(on hands or in booking books) */
        let userBooksOnHands = [...this.props.takenBooks]
        let overlapArrayOnHands = userBooksOnHands.filter(book => {
          if (book.bookId === this.state.bookId) return true
          return false
        })
        let userBookedBooks = [...this.props.bookedBooks]
        let overlapArrayBooked = userBookedBooks.filter(book => {
          if (book.bookId === this.state.bookId) return true
          return false
        })
        //console.log(overlapArray);
        if (overlapArrayOnHands.length > 0) {
          this.setState({ hasUserThisBookOnHands: true })
        }
        if (overlapArrayBooked.length > 0) {
          this.setState({ hasUserThisBookBooked: true })
        }
      }

      banCheck = () => {
        if (this.props.isBan) {
          //this.props.onSetModal({ isShow: true, modalTitle: "Faild", modalText: "Your accaunt has been baned" })
          console.log("This accaunt was banned");
          return true
        }
        return false
      }

      addCommentHandler = commentText => {
        if (this.banCheck() || !commentText) return
        let newComment = {
          commentId: this.props.userId + this.commentDate,
          commentDate: Date.now(),
          commentAuthorId: this.props.userId,
          commentAuthor: this.props.username,
          commentText: commentText
        }
        this.setState((prevState) => ({
          comments: [
            ...prevState.comments,
            newComment
          ]
        }))
        this.props.onAddComment(commentText, this.state.bookId)
      }

      bookingBookHandler = e => {
        if (!this.props.userId) {
          this.props.history.push('/login')
          return
        }
        if (this.banCheck()) return
        this.props.onBookingBook(this.state.bookId, this.state.bookingTime)
          .then(this.setState({ hasUserThisBookBooked: true }))
      }

      cancelReservationHandler = (userId) => {
        this.props.onCancelReservation(this.state.bookId)
        .then(this.setState({ hasUserThisBookBooked: false }));
    }
      

      bookingTimeHandler = bookingTime => {
        this.setState({ bookingTime })
      }

      deleteCommentHandler = (commentAuthorId, date) => {
        let commentId = commentAuthorId + date;
        this.props.onDeleteComment(this.state.bookId, commentId);
      }

      goBack = () => {
        this.props.history.goBack()
      }

      render() {
        //console.log(this.props.bookData[this.state.bookId]);
        let { title, bookAuthor, year, genre, bookDescription } = this.props.bookData[this.state.bookId] ?
          this.props.bookData[this.state.bookId] :
          this.state
        let bookPage = this.state.showSpiner ?
          <Spinner/> :
          <BookPage bookId={this.state.bookId}
                    title={title} 
                    bookAuthor={bookAuthor} 
                    year={year} 
                    genre={genre} 
                    bookDescription={bookDescription} 
                    comments={this.state.comments} 
                    count={this.state.count} 
                    availableCount={this.state.availableCount}  
                    takenByCount={this.state.takenBy.length} 
                    bookedByCount={this.state.bookedBy.length} 
                    hasUserThisBookOnHands={this.state.hasUserThisBookOnHands}
                    hasUserThisBookBooked={this.state.hasUserThisBookBooked}
                    userId={this.props.userId} 
                    isAdmin={this.props.isAdmin} 
                    addCommentHandler={this.addCommentHandler} 
                    bookingBookHandler={this.bookingBookHandler} 
                    cancelReservationHandler={this.cancelReservationHandler} 
                    deleteCommentHandler={this.deleteCommentHandler} 
                    bookingTimeHandler={this.bookingTimeHandler} 
                    goBack={this.goBack}                    
            />
        return ( <> { bookPage } </>);
        }
      
}


const mapStateToProps = state => {
    return {
      userId: state.userReducer._id,
      username: state.userReducer.username,
      isAdmin: state.userReducer.isAdmin,
      isBan: state.userReducer.isBan,
      takenBooks: state.userReducer.takenBooks,
      bookedBooks: state.userReducer.bookedBooks,
      bookData: state.bookPageReducer
    }
  }

  const mapDispatchToState = dispatch => {
    return {
      onGetSingleBookData: (bookId) => dispatch(getSingleBook(bookId)),
      onAddComment: (commentText, bookId) => dispatch(addComment(commentText, bookId)),
      onBookingBook: (bookId, bookingTime) => dispatch(bookingBook(bookId, bookingTime)),
      onCancelReservation: (bookId) => dispatch(cancelBookReservationUser(bookId)),
      onDeleteComment: (bookId, commentId) => dispatch(deleteComment(bookId, commentId)),
    }
  }

  export default connect(mapStateToProps, mapDispatchToState)(BookPageContainer);