import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./components/layout/Main";
import MainView from "./components/layout/MainView";

import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/foodplan" component={MainView} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
