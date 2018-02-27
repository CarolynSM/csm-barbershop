import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.css";
import Photos from "./photos.js";
import rootReducer from "./rootReducer.js";

const middleware = [logger, thunk];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper className="App">
          <Photos />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
