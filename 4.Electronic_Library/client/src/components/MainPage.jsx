import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../config/links';


class MainPage extends PureComponent {
    render() {
        return (
            <div>             
                <div>List of books:</div>
                <Link to={ links.BOOKS_PAGE } >
                    <button>
                      Find Book
                    </button>
                </Link> 
            </div>
            
        );
    }
}

export default MainPage;
    