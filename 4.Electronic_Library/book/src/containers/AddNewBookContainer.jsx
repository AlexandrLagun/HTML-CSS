import React from 'react';
import { connect } from 'react-redux'
import AddNewBook from '../components/AddNewBook';
import { addBook } from '../actions/admin';


class AddNewBookContainer extends React.PureComponent {

    addBookHandler = (data) => {
      
      if (data.title && data.bookAuthor && data.year  && data.bookDescription && data.genre && data.bookCover) {
        console.log(data.bookCover);
        this.props.onAddNewBook(data)
      } 
    }
  
    render() {
      return <AddNewBook addBookHandler={this.addBookHandler}/>
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAddNewBook: (data) => dispatch(addBook(data))
    }
  }
  
  export default connect(null, mapDispatchToProps)(AddNewBookContainer);