import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links /></div>;
const About = (props) => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;
const Profile = (props) => <div><h1>Profile - {props.params.name || 'Name'}</h1><Links /></div>;

const Links = () =>
  <nav>
  <Link activeStyle={{color: 'green'}} to="/profile/">Profile</Link>
  <Link activeStyle={{color: 'green'}} to="/profile/jim">Profile Jim</Link>

  <Link activeStyle={{color: 'green'}} to="/">Home</Link>
  <Link activeStyle={{color: 'green'}} to="/about">About</Link>
  <Link activeClassName="active" to="/contact">Contact</Link>
  </nav>;

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/profile/(:name)" component={Profile}></Route>
      </Router>
    );
  }
}
export default App;
