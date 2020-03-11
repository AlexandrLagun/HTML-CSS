export const signUpUser = data => dispatch => {
 /*    let formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password); */
 
    //console.log("useraction!!!" + userInfo);
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
      //dispatch(getUser());
    } else if (res.status === 401) {

      throw new Error("Invalid username or password");

    } else if (res.status === 404) {
      
      throw new Error("User with such username doesn't exists");

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
        console.log("err");
      });
  }


export const setUser = user => {
    return {
      type: "SET_USER",
      user
    };
  }

