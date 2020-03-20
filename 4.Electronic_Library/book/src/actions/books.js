export const getBooks = filter => (dispatch) => {
  
    return fetch("/books")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Books loading was faild");
        }
      })
      .then((books) => dispatch(setBooks(books)))
      .catch((err) => /* dispatch(setModal({
        isShow: true,
        modalTitle: "Something happend",
        modalText: err
      })) */
      console.log("Error was happened!!!")
      )
}

export const setBooks = (books) => {
    return {
      type: "SET_BOOKS",
      books
    };
  }