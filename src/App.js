import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import logo from "./logo.svg";
import "./App.css";
import Photos from "./photos.js";
import rootReducer from "./rootReducer.js";
import Toggle from "./Toggle.js";

const middleware = [logger, thunk];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="my-photos">My Photos</h1>
          <Photos />
        </div>
      </Provider>
    );
  }
}

export default App;

// const defaultState = {
//   welcome: "Hi",
//   otherState: "some stuff"
// };
//
// const greeting = (state = defaultState, action) => {
//   switch (action.type) {
//     case "GREET_NAME":
//       return { ...state, welcome: "Hello " + action.name };
//     case "GREET_WORLD":
//       return { ...state, welcome: "Hello World" };
//     default:
//       return state;
//   }
// };
// const store = createStore(greeting);
//
// console.log(store.getState());
//
// const name = "Carolyn";
//
// store.dispatch({
//   type: "GREET_NAME",
//   name
// });
//
// console.log(store.getState());
