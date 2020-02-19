import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/layout/Main';
import MainView from './components/layout/MainView';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/foodplan" component={MainView} />
        <Redirect path="*" to="/"/>
      </Switch>
    </Router>
  );
};



export default App;
