import React from 'react';
import Book from './Book';

class SearchBooks extends React.PureComponent {

    state = {
      input: ''
    };

    inputChange = (e) => {
        this.setState({ input: e.target.value });
      };

    searchHandler = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.input);
    };

    render() {
        return (
          <div >
            <form onSubmit={this.searchHandler}>
              <input type="text" onChange={this.inputChange}/>
              <button type="submit" >Search</button>
            </form>
            <div>
            {
              this.props.searchResult.map((book, i)=>{
                return <Book key={book._id} book={book} bookClickHandler={this.props.bookClickHandler}/>
              })
            }
            </div>
          </div>
        )
      }
    }
    
    export default SearchBooks;