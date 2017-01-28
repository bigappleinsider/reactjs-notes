# React hour 6 - Component Lifecycle - Updating
Each time we click the button, we call update that increments val

```js
import React from 'react';
import ReactDOM from 'react-dom';

class  App extends React.Component {
  constructor() {

  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    //prevent render, but state is still updated
    return nextProps.val % 5 === 0;
  }
  update(){
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('root')
    )
  }
  render(){
    return (
      <button onClick={this.update.bind(this)}>{this.props.val}</button>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps ${prevProps.val}`)
  }
}

App.defaultProps = {val: 0}

export default App

```
