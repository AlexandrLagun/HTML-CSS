import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import Main from './components/Main';
import { RegistrationForm } from './containers/Registration';

const enhancers = compose(
   window.devToolsExtension ? window.devToolsExtension() : f => f,
   applyMiddleware(thunkMiddleware)
 );

const store = createStore(rootReducer, enhancers);

store.subscribe(() => {
   console.log("STORE STATE", store.getState());
 });

render(
   <Provider store={store}>
     
        <RegistrationForm />
      
   </Provider>,
   document.getElementById('root')
);
