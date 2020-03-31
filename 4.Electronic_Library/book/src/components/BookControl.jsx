import React from 'react';
import ControlBookedBook from "./ControlBookedBook";
import ControlTakenBook from "./ControlTakenBook";

class BookControl extends React.PureComponent {
    render() {
        return (
            <div>
                <div>
                    <div>
                    <p>Booked by:</p>
                    {this.props.adminContent.bookedBy.map((book,i)=>{
                            return <ControlBookedBook key={i + book.userId + book.dateOfBook} 
                                                      book={book} 
                                                      handOutHandler={this.props.handOutHandler} 
                                                      cancelReservationHandler={this.props.cancelReservationHandler} 
                                                      clickOnUserHandler={this.props.clickOnUserHandler}
                                    />
                            })}
                    </div>
                    <div>
                    <p>Taken by:</p>
                    {this.props.adminContent.takenBy.map((book,i)=>{
                            return <ControlTakenBook key={i + book.userId + book.dateOfHandingOut} 
                                                     book={book} 
                                                     returnBook={this.props.returnBook} 
                                                     clickOnUserHandler={this.props.clickOnUserHandler}
                                    />
                            })}
                    </div>
                </div>
            </div>

        )
    }

}

export default BookControl;