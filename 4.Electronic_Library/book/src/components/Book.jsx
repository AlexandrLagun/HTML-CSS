import React from 'react';

class Book extends React.PureComponent {

    onClick = () => {
      this.props.bookClickHandler(this.props.book._id)
    }
  
    render() {
      return (<div  onClick={this.onClick}>
        <img src={`/book/cover/${this.props.book._id}`}  alt="book cover"/>
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