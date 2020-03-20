import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
/* import SideBarContainer from './SideBarContainer'
import ContentContainer from './ContentContainer'

import ModalMessage from '../components/ModalMessage/ModalMessage' */
import { getUser } from "../actions/userActions";
import { bindActionCreators } from 'redux';

//import "./App.css";
import SignUpContainer from "./SignUpContainer";
import SignInContainer from "./SignInContainer";
import BooksContainer from "./BooksContainer";
import AddNewBookContainer from "../containers/AddNewBookContainer";

class Main extends React.PureComponent {

  componentDidMount() {
    this.props.getUserProfile()
  }

 /*  closeModalMessage = () => {
    this.props.onSetModal()
  } */

  render() {
    return (<BrowserRouter>
      <div className="main">
        {/* <SignUpContainer/> */}
       {/*  <SignInContainer/> */}
       {/*  <AddNewBookContainer/> */}
        <BooksContainer/>
      </div>
    </BrowserRouter>);
  }
}

/* const mapStateToProps = state => {
 // return { isModalShow: state.modalMessage.isShow, modalTitle: state.modalMessage.modalTitle, modalText: state.modalMessage.modalText }
} */

  const mapDispatchToProps = (dispatch) => {
    const bindedCreators = bindActionCreators({
      getUserProfile: getUser, 
    }, dispatch);
    return {
        ...bindedCreators
    }
} 

export default connect(null, mapDispatchToProps)(Main);