import React from "react";
import { connect } from "react-redux";

import SingUp from '../components/SignUp';
import { signUpUser } from '../actions/userActions';

class SingUpContainer extends React.PureComponent {
  
    signUpHandler = (data) => {

        
        this.props.onSignUpUser(data).then(() => this.props.history.push('/')).catch((err) => console.log(err))
        //console.log(data, "from container");
    }
  
    render() {
      return (
        <SingUp signUpHandler={this.signUpHandler} />
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onSignUpUser: (data) => dispatch(signUpUser(data))
    }
  }


  /* const mapDispatchToProps = (dispatch) => {
    const bindedCreators = bindActionCreators({
      getUserProfile: getUser, 
    }, dispatch);
    return {
        ...bindedCreators
    }
}  */
  


  export default connect(null, mapDispatchToProps)(SingUpContainer);