import React from "react";
import { connect } from "react-redux";
import SignIn from '../components/SignIn';
import { signInUser } from '../actions/userActions';

class SignInContainer extends React.PureComponent {

  signInHandler = (data) => {
    this.props.onSignInUser(data).then(() => this.props.history.push('/home')).catch((err) => console.log(err))
  }

  render() {
    return (<SignIn signInHandler={this.signInHandler}/>);
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInUser: (data) => dispatch(signInUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);