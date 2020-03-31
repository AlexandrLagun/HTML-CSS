import React from 'react';

class ControlTakenBook extends React.PureComponent {

    returnBook = () => {
      this.props.returnBook(this.props.book.userId)
    }
  
    clickOnUserHandler = () => {
      this.props.clickOnUserHandler(this.props.book.userId)
    }
  
    render() {
      let dateOfHandingOut = new Date(this.props.book.dateOfHandingOut).toLocaleString();
      let ReturnDate = new Date(this.props.book.ReturnDate).toLocaleString();
      let timeOnHands = new Date(Date.now() - this.props.book.dateOfHandingOut);
      return (
        <div /* onClick={this.clickOnUserHandler} */>
          <p>User id: {this.props.book.userId}</p>
          <p>Handing out date: {dateOfHandingOut}</p>
          <p>Return date: {ReturnDate}</p>
          <p>Time on hands:  {timeOnHands.getDate()-1} days, {timeOnHands.getHours()-3} hours, {timeOnHands.getMinutes()} minutes.</p>
          <button onClick={this.returnBook}>Return book to library</button>
        </div>
      )
    }
  }
  
  export default ControlTakenBook;