import React, { Suspense } from "react";
import { connect } from 'react-redux';

import { getBooks } from "../actions/books";
import Spinner from "../components/Spinner";
const Books = React.lazy(() => import('../components/Books'));

class BooksContainer extends React.PureComponent {

    componentDidMount() {
  
      this.props.onGetBooks();
      
    }
  
    bookClickHandler = bookId => {
      this.props.history.push(`/book/${bookId}/`)
    }
  
    render() {
      return (<Suspense fallback={<Spinner/>}>
        {/* <Books books={this.props.books} bookClickHandler={this.bookClickHandler}/> */} hello from bookContainer!
      </Suspense >);
    }
  }
  
  const mapStateToProps = state => {
    return { books: state.books }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetBooks: (filter) => { return dispatch(getBooks()) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);