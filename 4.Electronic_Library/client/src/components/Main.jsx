import React, { PureComponent } from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

class Main extends PureComponent {
  render() {
    const { isAdmin, loggedIn, onSignOut } = this.props;
    return (
        <>
          <Header
            isAdmin={isAdmin}
            loggedIn={loggedIn}
            onSignOut={onSignOut}
          />
          <div className="content">
            {this.props.children}
          </div>
          <Footer/>
        </>
    )
  }
}

export default Main;