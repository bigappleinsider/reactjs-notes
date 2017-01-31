import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';



class Profile extends React.Component {
  mixins: [ReactFireMixin]
  constructor(){
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
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
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile;
