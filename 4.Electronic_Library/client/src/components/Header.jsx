import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../config/links';


const Header = ( { isAdmin, loggedIn, onSignOut } ) => (
      <header>
        <div className="nav"> 
            <Link to='/' className="image">
                <img
                  /* src={image} */
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
                    <button>
                      Log In
                    </button>
                  </Link>
                  <Link to={ links.SIGN_UP_PAGE } >
                    <button>
                      Sign Up
                    </button>
                  </Link>
                </div>
            }
            {/* <Link to={ links.ABOUT_INFO_PAGE }>About us</Link> */}
            {/* если пользователь пользователь в системе - показать кнопки для входа в акккаунт и выхода из системы */}
            { loggedIn &&
            <div>
              <Link to={ links.PROFILE_PAGE } >
                <button>
                  Profile
                </button>
              </Link>
              <Link to={""} onClick={onSignOut}>
                <button>
                  Sign Out
                </button>
              </Link>
            </div>
            }
        </div>
      </header>  
)

export default Header;

// isAdmin?