import React from 'react';
import '../styles.css';

class Book extends React.PureComponent {

    onClick = () => {
      this.props.bookClickHandler(this.props.book._id)
    }
  
    render() {
      return (<div  onClick={this.onClick}>
        <img src={`/book/cover/${this.props.book._id}`} className="book__cover-image" alt="book cover" />
        <div >
          <span>{this.props.book._id}</span><br/>
          <span>{this.props.book.title}</span><br/>
          <span>{this.props.book.bookAuthor}</span><br/>
          <span>{this.props.book.genre}</span><br/>
        </div>
      </div>)
    }
  }
  
  export default Book;