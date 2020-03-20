import React from 'react';

class Book extends React.PureComponent {

    onClick = () => {
      this.props.bookClickHandler(this.props.book._id)
    }
  
    render() {
      return (<div  onClick={this.onClick}>
        <img src={`/book/cover/${this.props.book._id}`}  alt="book cover"/>
        <div >
          <span>{this.props.book.title}</span>
          <span>{this.props.book.bookAuthor}</span>
          <span>{this.props.book.genre}</span>
        </div>
      </div>)
    }
  }
  
  export default Book;