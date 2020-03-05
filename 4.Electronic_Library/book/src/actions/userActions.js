export const signUpUser = data => dispatch => {
    let formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    //console.log(formData);
    return fetch("/signup", {
        method: "POST",
        body: formData
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(getUser())
        } else if (res.status === 401) {
          throw new Error("User with this email or username is already exists");
        } else {
          throw new Error("Server error");
        }
      }) 
  }

  export const getUser = () => dispatch => {
    fetch('/profile')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("the User wasn't authenticated");
        }
      })
      .then(user => {
        dispatch(setUser(user));
      })
      .catch(err => {
        console.log(err);
      });
  }


  const setUser = user => {
    return {
      type: "SET_USER",
      user
    };
  }