export const addBook = data => dispatch => {
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("bookAuthor", data.bookAuthor);
    formData.append("year", data.year);
    formData.append("bookDescription", data.bookDescription);
    formData.append("genre", data.genre);
    formData.append("bookCover", data.bookCover);


  //  console.log(data);
  //  console.log("book cover: " + JSON.stringify(data.bookCover.name));
    return fetch("/addbook", {
        method: "POST",
        /* headers: {
          "Content-Type": "application/json"
          "enctype": "multipart/form-data"  "application/json"
        }, */
        body: formData//JSON.stringify(data)
      })
      .then(res => {
        if (res.status === 200) {
          /* dispatch(setModal({
            isShow: true,
            modalTitle: "Book add",
            modalText: "The book has been added to the library"
          })) */
          console.log("Everything well with adding book---from action");

        } else {
          /* dispatch(setModal({
            isShow: true,
            modalTitle: "Book add faild",
            modalText: "Something happend"
          })) */
          console.log("Something wrong with adding book---from action");
        }
      })
  }

  export const deleteComment = (bookId, commentId) => dispatch => {
    return fetch('deletecomment', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookId,
        commentId
      })
    })
  }


  export const getBookData = bookId => dispatch => {
    return fetch(`getbookdata/${bookId}`)
      .then(res => res.json())
      .then(data => dispatch(setUpdatedBook(data)))
  }

  const setUpdatedBook = data => {
    return {
      type: "SET_UPDATED_BOOK",
      data
    }
  }

  export const handOutBook = (userId, bookId) => dispatch => {
    return fetch('handout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          bookId: bookId
        })
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(getBookData(bookId))
        } else {
          console.log("Something wrong in admin actions!");
        }
      })
  }

  export const cancelBookReservation = (userId, bookId) => dispatch => {
    return fetch('cancelreservationadmin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          bookId: bookId
        })
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(getBookData(bookId))
        } else {
          console.log("Something wrong in admin actions!!!");
        }
      })
  }

  export const returnBook = (userId, bookId) => dispatch => {
    return fetch('returnbook', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          bookId: bookId
        })
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(getBookData(bookId))
        } else {
          console.log("Something has happened on admin actions!");
        }
      })
  }

