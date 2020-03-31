import React from 'react';

class ControlBookedBook extends React.PureComponent {
    
    handOutHandler = () => {
        this.props.handOutHandler(this.props.book.userId)
    }
    
    cancelReservationHandler = () => {
        this.props.cancelReservationHandler(this.props.book.userId)
    }

    clickOnUserHandler = () => {
        this.props.clickOnUserHandler(this.props.book.userId)
    }

    render() {
        let dateOfBook = new Date(this.props.book.dateOfBook).toLocaleString();
        let datebookEnd = new Date(this.props.book.datebookEnd).toLocaleString();
        return (
          <div /* onClick={this.clickOnUserHandler} */>
            <p>User id: {this.props.book.userId}</p>
            <p>Reservation date: {dateOfBook}</p>
            <p>Reservation end date: {datebookEnd}</p>
            <button onClick={this.handOutHandler}>Hand out the book</button>
            <button onClick={this.cancelReservationHandler}>Cancel reservation</button>
          </div>
        )
      }
}

export default ControlBookedBook;