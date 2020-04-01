import React from "react";
import UserLibraryContainer from "../containers/UserLibraryContainer";

class Profile extends React.PureComponent {

    render() {
      return (<div>
        <p>{this.props.isBan?'This user was banned':''}</p>
        <p>{this.props.login}</p>
        <p className="profile__login">{this.props.login}</p>
        <p className="profile__login">{this.props.email}</p>
        <button className="btn" onClick={this.props.LogOutHandler}>LogOut</button>
        <UserLibraryContainer/>
      </div>);
    }
  }
  
  export default Profile;