export const getBooks = filter => (dispatch) => {
  
    return fetch("/books")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Books loading was faild");
        }
      })
      .then((books) => {  
        console.log("Hi there from: " + JSON.stringify(books));
       dispatch(setBooks(books));
      //console.log("Hi there from");
      })
      .catch((err) => 
      console.log("Error was happened!!!")
      )
}

export const setBooks = books => {
  return {
    type: "SET_BOOKS",
      books
  };
}

export const searchRequest = searchValue => dispatch => {
  return fetch('/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchValue: searchValue
      })
    })
    .then(res => res.json())
    .then(books => dispatch(setSearchedBooks(books)));
}

const setSearchedBooks = books => {
  return {
    type: "SET_SEARCHED_BOOKS",
      books
  };
}
