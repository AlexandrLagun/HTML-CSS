import React from "react";
import { render } from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./containers/Main";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from 'redux-thunk';

//import history from "./containers/Main";

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(thunkMiddleware)
  );
const store = createStore(rootReducer, enhancers);


store.subscribe(() => {
    console.log("STORE STATE:", store.getState());
});

render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById("root"));