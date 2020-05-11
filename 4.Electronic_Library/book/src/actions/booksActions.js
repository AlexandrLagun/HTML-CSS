import { getUser } from "./userActions";


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

export const getSingleBook = (bookId) => (dispatch) => {
  //console.log(bookId);
  fetch(`/book/${bookId}`)
    .then(res => res.json())
    .then(book => {
      dispatch(setSingleBook(book))
    })
}

export const setSingleBook = book => {
  //console.log(book);
  return {
    type: "SET_SINGLE_BOOK",
    book
  }
}

export const addComment = (commentText, bookId) => dispatch => {
  fetch("/addcomment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      bookId,
      commentText
    })
  })
}


export const cancelBookReservationUser = (bookId) => dispatch => {
  return fetch("/cancelreservationuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookId,
      })
    })
    .then(res => {
      if (res.status === 200) {
        dispatch(getUser());
        /* dispatch(setModal({
          isShow: true,
          modalTitle: "Booking book",
          modalText: `Book has booked for ${bookingTime/1000/60/60} hours`
        })) */ console.log(`Book has cancel reservation for book`);
      } else {
        /* dispatch(setModal({
          isShow: true,
          modalTitle: "Booking book faild",
          modalText: "There are no available books or you alredy have one of it"
        })) */  console.log("There are no available books or you alredy have one of it");
      }
    })
}



export const bookingBook = (bookId, bookingTime) => dispatch => {
  console.log(" 2 Start bookingBook from bookActions");
  return fetch("/bookingbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookId,
        bookingTime
      })
    })
    .then(res => {
      if (res.status === 200) {
        console.log(" 7 End of route bookingBook in action");
        dispatch(getUser());
        /* dispatch(setModal({
          isShow: true,
          modalTitle: "Booking book",
          modalText: `Book has booked for ${bookingTime/1000/60/60} hours`
        })) */ //console.log(`Book has booked for ${bookingTime/1000/60/60} hours`);
      } else {
        /* dispatch(setModal({
          isShow: true,
          modalTitle: "Booking book faild",
          modalText: "There are no available books or you alredy have one of it"
        })) */  console.log("There are no available books or you alredy have one of it");
      }
    })
}
