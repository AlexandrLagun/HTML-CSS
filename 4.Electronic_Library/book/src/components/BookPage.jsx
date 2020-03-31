import React from "react";
import Comment from './Comment';
import AddComment from './AddComment';
import { Link } from "react-router-dom";

class BookPage extends React.PureComponent {
    bookingTimeHandler = e => {
        let hours = parseFloat(e.target.value)
        this.props.bookingTimeHandler(1000 * 60 * 60 * hours)
    }

    render() {
        let {
          bookId,  
          title,
          bookAuthor,
          year,
          genre,
          bookDescription,
          comments,
          count,
          availableCount,
          bookedByCount,
          takenByCount,
          hasUserThisBook,
          hasUserThisBookOnHands,
          hasUserThisBookBooked,
          userId,
          isAdmin,
          addCommentHandler,
          deleteCommentHandler          
        } = this.props;

        let adminLink = isAdmin ? (
          <div>
            <Link to={`/book/${bookId}/manage`} >
              Update this book
            </Link>
          </div>
        ) : null;

        let addComment = userId ? <AddComment bookId={bookId}  commentAuthorId={userId} addCommentHandler={addCommentHandler}/> : null;

        let bookBtn = null;
        if (!hasUserThisBookOnHands) {
          if(!hasUserThisBookBooked) {
            bookBtn = <button onClick={this.props.bookingBookHandler}>Make reservation</button>
          } else bookBtn = <button onClick={this.props.cancelReservationHandler} >Cancel reservation</button>
        } else bookBtn = <button onClick={this.props.bookingBookHandler} disabled={true}>Make a reservation</button>

        return (<div>
                  <div >
                    <img src={`/book/cover/${this.props.bookId}`} alt="book_cover"/>
                      <div >
                      <h2>{title}</h2>
                      <p>{bookAuthor} </p>
                      <p> {year} </p>
                      <p> {genre} </p>
                      <p> {bookDescription} </p>
                      <p>Available count: {availableCount},  booked count: {bookedByCount}, taken on hands count:  {takenByCount} </p>
                      <button  onClick={this.props.goBack}>Go back</button>
                      <select  onChange={this.bookingTimeHandler}>
                        <option>2 days</option>
                        <option>1 day</option>
                        <option>12 hours</option>
                        <option>6 hours</option>
                      </select>
                      {bookBtn}
                    </div>
                  </div>
                  {adminLink}
                  <div>
                    {
                      comments.map(comment => {
                        return (<Comment key={comment.id} 
                                         commentAuthor={comment.commentAuthor} 
                                         commentAuthorId={comment.commentAuthorId} 
                                         commentText={comment.commentText} 
                                         date={comment.date} 
                                         isAdmin={isAdmin} 
                                         deleteCommentHandler={deleteCommentHandler}/>)
                                })
                    }
                    {addComment}
                  </div>
                </div>
              );
  }
}

export default BookPage;