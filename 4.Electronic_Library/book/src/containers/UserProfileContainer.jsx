import React from "react";
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';
import { logOutUser } from '../actions/userActions';

class ProfileContainer extends React.PureComponent {

    LogOutHandler = e => {
      this.props.onLogOutUser().then(() => this.props.history.push('/home'))
    }
  
    render() {
      let {firstName, lastName, username, email, userId, isBan } = this.props
      return <UserProfile firstName={firstName} 
                        lastName={lastName} 
                        username={username} 
                        email={email} 
                        userId={userId} 
                        isBan={isBan} 
                        LogOutHandler={this.LogOutHandler}/>
    }
  }
  const mapStateToProps = state => {
    return {
      firstName: state.userReducer.firstName,
      lastName: state.userReducer.lastName,
      username: state.userReducer.username,
      email: state.userReducer.email,
      userId: state.userReducer._id,
      isBan: state.userReducer.isBan
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onLogOutUser: () => dispatch(logOutUser())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);