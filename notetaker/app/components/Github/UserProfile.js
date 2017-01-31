import React from 'react';

class UserProfile extends React.Component {
  render(){
    return (
      <div>User Profile<h1>{this.props.username}</h1></div>
    );
  }
}
export default UserProfile;
