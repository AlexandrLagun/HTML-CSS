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