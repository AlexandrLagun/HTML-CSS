import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../config/links';


const Header = ( { isAdmin, loggedIn, onSignOut } ) => (
      <header>
        <div className="nav"> 
            <Link to='/' className="image">
                <img
                  src={image}
                  width="50"
                  height="50"
                  className="image"
                  alt="ElectronicLibrary"
                />
            </Link>
            {/* если пользователь не вошел в аккаунт показать кнопки для регистрации и входа */}
            { !loggedIn &&
                <div>
                  <Link to={ links.LOG_IN_PAGE } >
                    <Button>
                      Log In
                    </Button>
                  </Link>
                  <Link to={ links.SIGN_UP_PAGE } >
                    <Button>
                      Sign Up
                    </Button>
                  </Link>
                </div>
            }
            {/* <Link to={ links.ABOUT_INFO_PAGE }>About us</Link> */}
            {/* если пользователь пользователь в системе - показать кнопки для входа в акккаунт и выхода из системы */}
            { loggedIn &&
            <div>
              <Link to={ links.PROFILE_PAGE } >
                <Button>
                  Profile
                </Button>
              </Link>
              <Link to={""} onClick={onSignOut}>
                <Button>
                  Sign Out
                </Button>
              </Link>
            </div>
            }
        </div>
      </header>  
)

export default Header;

// isAdmin?