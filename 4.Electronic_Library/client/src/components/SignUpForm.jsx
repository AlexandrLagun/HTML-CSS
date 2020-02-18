import React from "react";


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }  

  submitHandler = (e) => {
    e.preventDefault();

    this.props.handleSignUp( this.state.firstName, this.state.lastName, this.state.email, this.state.password);

    this.setState( {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  }

  handleFirstnameChange = (e) => { this.setState({ firstName: e.target.value }); };
  handleLastnameChange = (e) => { this.setState({ lastName: e.target.value }); };
  handleEmailChange = (e) => { this.setState({ email: e.target.value }); };
  handlePasswordChange = (e) => {this.setState({password: e.target.value});};

  render(){
    return ( 
      <form className="signUpForm" onSubmit={this.submitHandler}>

        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstnameChange}/>
        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastnameChange}/>
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <button type="submit" >Sign Up</button>
      </form>
    )
  };

};

export default SignUpForm;