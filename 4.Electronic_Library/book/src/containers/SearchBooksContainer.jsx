import React from 'react';
import { connect } from 'react-redux';
import SearchBooks from '../components/SearchBooks';
import { searchRequest } from '../actions/booksActions';

class SearchBooksContainer extends React.PureComponent {

    searchHandler = searchValue => {
      this.props.onSearchRequest(searchValue);
    }
  
    bookClickHandler = bookId => {
      this.props.history.push(`/book/${bookId}/`);
    }
  
    render() {
      return <SearchBooks searchHandler={this.searchHandler} searchResult={this.props.searchResult} bookClickHandler={this.bookClickHandler}/>
    }
  }
  
  const mapStateToProps = state => {
    return { searchResult: state.searchBooks }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearchRequest: (searchValue) => dispatch(searchRequest(searchValue))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBooksContainer);