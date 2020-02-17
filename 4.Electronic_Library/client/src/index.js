import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));



render(
   <Provider store={store}>
     
        <App />
      
   </Provider>,
   document.getElementById('root')
);
