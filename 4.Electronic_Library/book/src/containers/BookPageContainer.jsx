import React from "react";
import { connect } from "react-redux";
import BookPage from '../components/BookPage';
import Spinner from '../components/Spinner';
import { addComment, getSingleBook, bookingBook, cancelBookReservationUser } from '../actions/booksActions';
import { deleteComment } from '../actions/admin';
/* import io from 'socket.io-client';
const socket = io.connect('/'); */
import openSocket from 'socket.io-client';
const socket = openSocket('/');

class BookPageContainer extends React.PureComponent {

    state = {
        bookId: "5e7203908d5e9124f4e6637b",//"5e71fc738d5e9124f4e6637a" ,//this.props.match.params.bookId,
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
       /*  hasUserThisBookOnHands: false,
        hasUserThisBookBooked: false, */
        hasUserThisBook: false
      }


     /*  componentDidMount() {
        //if (!this.props.booksDetails[this.state.bookId])
          this.props.onGetSingleBook(this.state.bookId);
        socket.emit('reqBookData', { bookId: this.state.bookId });
        socket.on('resBookData', data => {
          let comments = data.comments.map((comment, i) => {
            comment.id = i + comment.commentAuthorId + comment.date;
            return comment;
          })
          this.setState({ comments: comments, count: data.count, availableCount: data.availableCount, showSpiner: false });
        })
        socket.on(`dataUpdate${this.state.bookId}`, () => {
          socket.emit('reqBookData', { bookId: this.state.bookId });
        })
      } */

      componentDidMount() {
        if (!this.props.bookPageReducer[this.state.bookId])
          this.props.onGetSingleBookData(this.state.bookId);
        socket.emit('requestBookData', { bookId: this.state.bookId });
        socket.on('responceBookData', data => {
          let comments = data.comments.map((comment, i) => {
            comment.id = i + comment.commentAuthorId + comment.date;
            return comment;
          })
          this.setState({ comments: comments, count: data.count, availableCount: data.availableCount, showSpiner: false });
        })
        socket.on(`bookUpdate${this.state.bookId}`, () => {
          console.log("Hi from socket bookUpdate");
          socket.emit('requestBookData', { bookId: this.state.bookId });
        })
      }


      componentWillUnmount(nextProps, nextState) {
        socket.off('responceBookData');
        socket.off(`bookUpdate${this.state.bookId}`);
      }


      componentDidUpdate(prevProps, prevState) {
        let userBooks = [...this.props.bookedBooks, ...this.props.takenBooks]
        let compainBook = userBooks.filter(book => {
          if (book.bookId === this.state.bookId) return true
          return false
        })
        console.log('compainBook: ' + compainBook);
        if (compainBook.length > 0) {
          this.setState({ hasUserThisBook: true })
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
          date: Date.now(),
          commentAuthorId: this.props.userId,
          commentAuthor: this.props.username,
          commentText: commentText,
          id: this.props.userId + this.date
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
          //this.props.history.push('/login')
          return
        }
        if (this.banCheck()) return
        this.props.onBookingBook(this.state.bookId, this.state.bookingTime)
          .then(this.setState({ hasUserThisBook: true }))
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
        let { title, bookAuthor, year, genre, bookDescription } = this.props.bookPageReducer[this.state.bookId] ?
          this.props.bookPageReducer[this.state.bookId] :
          this.state;
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
                   /*  takenByCount={this.state.takenBy.length} 
                    bookedByCount={this.state.bookedBy.length}  */
                   /*  hasUserThisBookOnHands={this.state.hasUserThisBookOnHands}
                    hasUserThisBookBooked={this.state.hasUserThisBookBooked} */
                    userId={this.props.userId} 
                    isAdmin={this.props.isAdmin} 
                    addCommentHandler={this.addCommentHandler} 
                    bookingBookHandler={this.bookingBookHandler} 
                   /*  cancelReservationHandler={this.cancelReservationHandler}  */
                    deleteCommentHandler={this.deleteCommentHandler} 
                    bookingTimeHandler={this.bookingTimeHandler} 
                    hasUserThisBook={this.state.hasUserThisBook}
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
      bookPageReducer: state.bookPageReducer
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