import React, { Component } from 'react';


/*
functional component vs class component
Start with a functional component, when extra functionality needed -> refactor
const SearchBar = () => {
  return (
    <div>
      <input />
    </div>
  );
}
class SearchBar extends React.Component {
  render(){
    return (<input />)
  }
}

return (<input onChange={this.onInputChange} />)
We have input element
we want to add event handler for it
*/
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }
  render(){
    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    //console.log(event.target.value)
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
