import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/layout/Main';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect path="*" to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
