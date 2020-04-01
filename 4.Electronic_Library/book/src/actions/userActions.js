export const signUpUser = data => dispatch => {
 
    return fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.status === 200) {
        //dispatch(getUser())
        //console.log("fetch error");
      } else if (res.status === 401) {
        throw new Error("User with this email or username is already exists");
      } else if (res.status === 500){
        throw new Error("Server error");
      }
    }) 
}

export const signInUser = (data) => dispatch => {
  return fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.status === 200) {
      dispatch(getUser());
      
    } else if (res.status === 401) {

      throw new Error("Invalid email or password");

    } else if (res.status === 404) {
      
      throw new Error("User with such email doesn't exists");

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
       // console.log("User: " + JSON.stringify(user));
      })
      .catch(err => {
        console.log("err");
      });
  }


export const setUser = user => {
    return {
      type: "SET_USER",
      payload: user
    };
  }


  export const logOutUser = () => dispatch => {
    return fetch("/logout")
      .then(() => dispatch(setUser({
        _id: '',
        firstName: "",
        lastName: "",
        username: "Guest",
        email: null,
        takenBooks: [],
        bookedBooks: []
      })))
  }
  
