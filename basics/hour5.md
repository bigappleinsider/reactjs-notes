# React hour 4 - Lifecycle mounting basics

- Mounting - component is added to the DOM
- Unmounting - component removed from the DOM

Lifecycle events
- `componentWillMount` - right before it mounted to the DOM
we have access to state and props
we do not have access to DOM representation of the component
we can intercept state before it renders
- `componentDidMount` - once component mounted into the DOM
we have access to out component in the DOM
- `componentWillUnmount` - component is about to leave the DOM
cleanup any running processes
## Component Lifecycle Mounting Usage




```js
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log('componentDidMount')
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(){
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    }
  }
}

export default App
