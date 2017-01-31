import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from '../components/Home';
import Main from '../components/Main';
import Profile from '../components/Profile';


class Routes extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Main}>
          <Route path="profile/:username" component={Profile} />
          <IndexRoute component={Home} />

        </Route>
      </Router>
    );
  }
}
export default Routes;
