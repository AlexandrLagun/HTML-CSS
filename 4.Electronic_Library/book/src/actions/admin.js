export const addBook = data => dispatch => {
    /* let formData = new FormData();
    formData.append("title", data.title);
    formData.append("year", data.year);
    formData.append("bookAthour", data.bookAthour);
    formData.append("bookDiscription", data.bookDiscription);
    formData.append("coverImage", data.coverImage); */

    console.log(data.bookCover);
    return fetch("/addbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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