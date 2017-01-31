import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';

var base = Rebase.createClass({
    apiKey: "AIzaSyDA1pQDtgaj4HtvedjZ-7TfB_fentAxl7Q",
    authDomain: "github-notetaker-web.firebaseapp.com",
    databaseURL: "https://github-notetaker-web.firebaseio.com",
    storageBucket: "github-notetaker-web.appspot.com",
});


class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }
  init(){
    this.ref = base.syncState(`/github/${this.props.routeParams.username}`, {
      context: this,
      asArray: true,
      state: 'notes'
    });
  }
  componentDidMount(){
    this.init();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
    base.removeBinding(this.ref);
    this.init();
  }
  handleAddNote(newNote){
    this.setState({
      notes: this.state.notes.concat([newNote])
    });
  }
  handleRemoveNote(idx){

    this.state.notes.splice(idx, 1);
    this.setState({
      notes: this.state.notes
    });

  }
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
            <UserProfile username={this.props.params.username} bio={this.state.repos} />
           {/* User Profile Component --> this.props.params.username */}
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.routeParams.username}
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)}
            removeNote={this.handleRemoveNote.bind(this)}
            />
        </div>
      </div>
    )
  }
}

Profile.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Profile;
