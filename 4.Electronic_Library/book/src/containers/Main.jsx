import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
/* import SideBarContainer from './SideBarContainer'
import ContentContainer from './ContentContainer'
import ModalMessage from '../components/ModalMessage/ModalMessage' */
import { getUser } from "../actions/userActions";
//import "./App.css";
import SignUpContainer from "./SignUpContainer";

class Main extends React.PureComponent {

  componentDidMount() {
    this.props.getUserProfile()
  }

  closeModalMessage = () => {
    this.props.onSetModal()
  }

  render() {
    return (<BrowserRouter>
      <div className="main">
        <SignUpContainer/>
      </div>
    </BrowserRouter>);
  }
}

/* const mapStateToProps = state => {
 // return { isModalShow: state.modalMessage.isShow, modalTitle: state.modalMessage.modalTitle, modalText: state.modalMessage.modalText }
} */

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => dispatch(getUser()),
  }
}

export default connect(null, mapDispatchToProps)(Main);