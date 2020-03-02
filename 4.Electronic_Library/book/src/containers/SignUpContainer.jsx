import React from "react";
import { connect } from "react-redux";
import SingUp from '../components/SignUp';
import { signUpUser } from '../actions/userActions';

class SingUpContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.signUpHandler = this.signUpHandler.bind(this);
  }
  
    signUpHandler = (data) => {
        console.log(data, "from container");
        //this.props.onSingUpUser(data).then(() => this.props.history.push('/home')).catch((err) => console.log(err))
      
    }
  
    render() {
      return (
        <SingUp signUpHandler={this.signUpHandler} />
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onSingUpUser: (data) => dispatch(signUpUser(data))
    }
  }

  export default connect(null, mapDispatchToProps)(SingUpContainer);