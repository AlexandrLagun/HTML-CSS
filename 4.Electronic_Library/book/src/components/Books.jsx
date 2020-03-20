import React from "react";
import Book from './Book';

class Books extends React.PureComponent {

    render() {
      return (<div>
        {
          this.props.books.map(book => {
            return (<Book key={book._id} book={book} bookClickHandler={this.props.bookClickHandler} bookCoverHandler={this.props.bookCoverHandler}/>)
          })
        }
      </div>);
    }
  }
  
  export default Books;